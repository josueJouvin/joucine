import { PlayVideo } from '../Icons'
import movieVideo from '../mocks/movieVideo.json'

export const Trailers = () => {
  return (
    <div className='mt-5'>
      <button className='border-2 py-3 px-6 rounded-xl border-yellow-500 text-yellow-500 font-semibold transition-all duration-300 hover:shadow-md hover:shadow-white'>
        <a
          className='flex items-center justify-center gap-3'
          href={`https://youtube.com/embed/${movieVideo.results[1].key}`}
          target='_blank'
          rel='noreferrer'
        >
          <PlayVideo /> Watch Trailer
        </a>
      </button>
    </div>
  )
}
