import { Link } from 'wouter'
import {
  Spotlight,
  Movie,
  Snacks,
  Multiclub,
  User,
  Logo,
  Cart,
  Logodesktop,
} from '../Icons'
import { menuItems } from '../types'

const menuItems: menuItems[] = [
  { href: '/', icon: <Spotlight />, label: 'Spotlight' },
  { href: '/movies', icon: <Movie />, label: 'Movies' },
  { href: '/snacks', icon: <Snacks />, label: 'Snacks' },
  { href: '/multiclub', icon: <Multiclub />, label: 'Multiclub' },
  { href: '/user', icon: <User />, label: 'User' },
]

export const Header = () => {
  return (
    <header className=' bg-header z-50 fixed w-full top-0'>
      <nav className='flex items-center justify-between  px-4 py-8 md:py-4 container mx-auto'>
        <Link href='/'>
          <div className='flex gap-1 items-center md:hidden'>
            <Logo />
          </div>
          <div className='hidden md:flex md:items-center'>
            <Logodesktop />
          </div>
        </Link>
        <div className='md:flex md:gap-8'>
          {/*<div className='bg-navMovil md:bg-inherit pt-2 pb-3.5 md:p-0 text-sm fixed left-0 bottom-0 w-full md:relative md:w-auto '>
            <div className='px-4 md:p-0'>
              
               <ul className='flex justify-evenly md:justify-center md:gap-8 items-center'>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='flex flex-col items-center justify-center cursor-pointer text-gray-500 md:text-white'
                  >
                    {item.icon}
                    <p>{item.label}</p>
                  </Link>
                ))}
              </ul>
              
            </div>
          </div>*/}
          <div className='border-2 rounded-xl border-neutral-700 py-2.5 px-3'>
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  )
}
