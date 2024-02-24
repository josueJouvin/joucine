import movieInformation from '../mocks/movieInformation.json'
import { Back, Hours } from '../Icons'
import { forrmattingRuntime } from '../utils/formattingRuntime'
import { useState } from 'react'
import Screenings from './Screenings'
import { Trailers } from './Trailers'
import Information from './Information'

const MovieSnap: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    'screenings' | 'Trailers' | 'Information'
  >('screenings')

  const handleTabClick = (tab: 'screenings' | 'Trailers' | 'Information') => {
    setSelectedTab(tab)
  }

  const bgUrl = `https://image.tmdb.org/t/p/w400${movieInformation.poster_path}`

  return (
    <>
      <div
        className='bgImage'
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>
      <main className='container mx-auto px-4 pt-28 pb-28 lg:pt-36 relative lg:grid lg:grid-cols-2 lg:content-center lg:gap-40'>
        <section>
          <p className='flex items-center gap-2 text-white mt-1 px-2 lg:text-lg lg:font-semibold'>
            <Back /> Regresar
          </p>
          <div className='text-white pt-8 mt-10 pb-5'>
            <img
              className='h-64 rounded-md lg:h-80'
              src={`https://image.tmdb.org/t/p/w200${movieInformation.poster_path}`}
              alt={`Poster for ${movieInformation.title}`}
            />
            <h3 className='uppercase font-semibold py-5 lg:text-xl'>
              {movieInformation.title}
            </h3>
            <div className='flex items-center gap-1 lg:text-lg'>
              <Hours />
              <span>{forrmattingRuntime(movieInformation.runtime)}</span>
            </div>
          </div>
          <div className='hidden lg:block'>
            <Trailers />
            <Information />
          </div>
        </section>
        <section className='lg:mt-14'>
          <div className='mt-9 flex justify-between items-center text-titles font-semibold text-xl'>
            <div
              className={`lg:cursor-auto lg:text-titles lg:text-3xl cursor-pointer ${
                selectedTab === 'screenings' ? 'font-bold text-white' : ''
              }`}
              onClick={() => handleTabClick('screenings')}
            >
              Screenings
            </div>
            <div
              className={`lg:hidden cursor-pointer  ${
                selectedTab === 'Trailers' ? 'font-bold text-white' : ''
              }`}
              onClick={() => handleTabClick('Trailers')}
            >
              Trailers
            </div>
            <div
              className={`lg:hidden cursor-pointer ${
                selectedTab === 'Information' ? 'font-bold text-white' : ''
              }`}
              onClick={() => handleTabClick('Information')}
            >
              Information
            </div>
          </div>
          <div className=''>
            {selectedTab === 'screenings' && <Screenings />}
            {selectedTab === 'Trailers' && <Trailers />}
            {selectedTab === 'Information' && <Information />}
          </div>
        </section>
      </main>
    </>
  )
}

export default MovieSnap
