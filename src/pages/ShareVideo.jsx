import { shareVideo } from '../services/api';
import { toast } from 'react-toastify'

export default function ShareVideo() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = e.target.elements.url.value

    try {
      const data = await shareVideo(url)
      e.target.reset()
      toast(data.data.message)
    } catch (e) {
      toast(e.response.data.error)
    }
  }

  return (
    <div className="share">
      <h2 className="share__title">Share a Youtube movie</h2>
      <form className="share__form" onSubmit={handleSubmit}>
        <label className="share__label" htmlFor="url">Youtube URL:</label>
        <input
          type="text"
          id="url"
          className="share__input"
          name='url'
          required
        />
        <button type="submit" className="share__button">Share</button>
      </form>
    </div>
  );
}
