import movieInformation from '../mocks/movieInformation.json'

const Information = () => {
  return (
    <section className='mt-5 lg:mt-8'>
      <div className=''>
        <p className='text-2xl text-titles'>Synopsis</p>
        <p className='text-base text-gray-100 pt-5 leading-5'>
          {movieInformation.overview}
        </p>
      </div>
      <div className='my-5 lg:mt-8'>
        <p className='text-2xl text-titles'>Genres</p>
        <div className='flex items-center gap-5 mt-2'>
          {movieInformation.genres.map((genere) => (
            <p
              className='py-0.5 px-2 text-gray-100 bg-buttons rounded-lg'
              key={genere.id}
            >
              {genere.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Information
