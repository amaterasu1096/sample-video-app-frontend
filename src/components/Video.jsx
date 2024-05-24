export default function Video({ video, onVote, isAuthenticated }) {
  const regex = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/

  const embedUrl = (url) => {
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const handleUpvote = () => {
    onVote(video.id, 'upvote');
  };

  const handleDownvote = () => {
    onVote(video.id, 'downvote');
  };

  const getButtonClass = (baseClass, condition) => {
    return `${baseClass} ${condition ? 'voted' : ''}`
  }

  return (
    <div className='video-unit'>
      <div className="video-unit__iframe">
        <iframe
          width="400px"
          height="350px"
          src={embedUrl(video.url)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="video-unit__info">
        <div className="video-unit__title">
          <strong>{ video.title }</strong>
        </div>
        <div className="video-unit__author">
          <p>Shared by: { video.email }</p>
        </div>
        { isAuthenticated &&
          <div className="video-unit__vote">
            <button className={getButtonClass('upvote', video.vote === 'upvote')} onClick={handleUpvote}>Upvote</button>
            <button className={getButtonClass('downvote', video.vote === 'downvote')} onClick={handleDownvote}>Downvote</button>
          </div>
        }
        <div className="video-unit__description">
          <span>Description:</span>
          <p>{ video.description }</p>
        </div>
      </div>
    </div>
  );
}
