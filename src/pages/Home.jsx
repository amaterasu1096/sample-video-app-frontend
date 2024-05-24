import { useEffect, useState, useRef, useCallback } from 'react';
import { toast } from 'react-toastify'
import { fetchVideos, voteVideo } from '../services/api';
import Video from '../components/Video';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const isAuthenticated = !!localStorage.getItem('token');
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadVideos(page)
  }, [page]);

  const loadVideos = async (page) => {
    try {
      const { data } = await fetchVideos(page)
      setVideos((prevVideos) => [...prevVideos, ...data.videos])
      setHasMore(data.meta.current_page < data.meta.total_pages);
    } catch (e) {
      toast(e.response.data.error)
    }
  };

  const handleVote = async (videoId, voteType) => {
    try {
      const data = await voteVideo(videoId, voteType);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, vote: data.data.vote_type } : video
        )
      );
      toast(data.data.message)
    } catch (e) {
      toast(e.response.data.error)
    }
  };

  return (
    <div className='videos'>
      <InfiniteScroll
        dataLength={videos.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {videos.map((video) => (
          <Video video={video} key={video.id} isAuthenticated={isAuthenticated} onVote={handleVote} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
