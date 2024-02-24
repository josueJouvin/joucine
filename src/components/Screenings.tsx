import { useEffect, useState } from 'react'
import { Desplegate } from '../Icons'
import { getCurrentMonth } from '../utils/getCurrentMonth'
import { getCurrentTime } from '../utils/getCurrentTime'
import { getWeekDays } from '../utils/getWeekDays'

const Screenings = () => {
  const { plusOneAndHalfHours, plusTwoHours } = getCurrentTime()
  const [selectedDay, setSelectedDay] = useState(getWeekDays()[0])

  const handleDayClick = (day: string) => {
    setSelectedDay(day)
  }

  return (
    <>
      <div className='overflow-x-auto scrollbar-none scroll-smooth scrollbar-thumb-rounded'>
        <div className='flex space-x-4 my-6 text-white font-medium text-[14.5px] lg:text-[16.5px]'>
          <button className='bg-buttons rounded-full w-max flex justify-between gap-2 items-center py-2 px-5'>
            <p className='text-nowrap'>All Languages</p>
            <Desplegate />
          </button>
          <button className='bg-buttons rounded-full w-max flex justify-between gap-2 items-center py-2 px-5'>
            <p className='text-nowrap'>All Formats</p>
            <Desplegate />
          </button>
          <button className='bg-buttons rounded-full w-max flex justify-between gap-2 items-center py-2 px-5'>
            <p className='text-nowrap'>All Rooms</p>
            <Desplegate />
          </button>
        </div>
      </div>
      <section className='mt-4'>
        <p className='text-titles font-semibold text-2xl lg:text-3xl'>
          {getCurrentMonth()}
        </p>
        <div className='bg-buttons p-5 rounded-3xl text-gray-100 my-5 flex gap-10 items-center justify-between overflow-x-auto scrollbar-none scroll-smooth scrollbar-thumb-rounded font-semibold'>
          {getWeekDays().map((day) => (
            <button
              onClick={() => handleDayClick(day)}
              className={`cursor-pointer flex flex-col items-center justify-center py-1 px-4 rounded-2xl ${
                selectedDay === day ? 'bg-yellow-500 text-gray-800' : ''
              }`}
              key={day.slice(4)}
            >
              <span className='text-lg'>{day.slice(0, 3)}</span>
              <span className='text-3xl lg:text-4xl'>{day.slice(-2)}</span>
            </button>
          ))}
        </div>
      </section>
      <section className='mt-12 mb-8'>
        <p className='text-titles font-semibold text-2xl lg:text-3xl'>Scala</p>
        <div className='bg-buttons p-3 lg:p-5 rounded-2xl mt-6'>
          <div className='flex flex-col gap-3'>
            <p className='text-gray-100 text-xl lg:text-2xl font-semibold'>
              2D ESP
            </p>
            <div className='border-2 border-dashed border-[hsla(230,10%,60%,1)]'></div>
            <p className='uppercase text-[hsla(230,10%,60%,1)] font-semibold lg:text-lg'>
              2d esp . sala normal y Vip
            </p>
            <div>
              <button className='rounded-lg border-2 border-[hsla(230,10%,60%,1)] py-2 px-4 text-gray-100 text-lg lg:font-semibold'>
                {plusOneAndHalfHours}
              </button>
            </div>
          </div>
          <div className='bg-[hsla(225,15%,8%,1)] h-2.5 rounded-lg my-5'></div>
          <div className='flex flex-col gap-3 mt-5'>
            <p className='text-gray-100 text-xl lg:text-2xl font-semibold'>
              2D SUB
            </p>
            <div className='border-2 border-dashed border-[hsla(230,10%,60%,1)]'></div>
            <p className='uppercase text-[hsla(230,10%,60%,1)] font-semibold lg:text-lg'>
              2d esp . sala normal
            </p>
            <div>
              <button className='rounded-lg border-2 border-[hsla(230,10%,60%,1)] py-2 px-4 text-gray-100 text-lg lg:font-semibold'>
                {plusTwoHours}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Screenings
