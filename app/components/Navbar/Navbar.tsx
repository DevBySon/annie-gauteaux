'use client'

import Container from '../Container'
import Cart from './Cart'
import NavItem from './NavItem'

const Navbar = () => {
  const navList = ['home', 'menu', 'about'];
  return (
    <nav className='fixed w-full bg-white z-10 top-0'>
      <div className='py-3 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between'>
            <div className='text-black text-base font-raleway'>Annie Gâteaux</div>
            <div className='flex flex-row font-raleway'>
              {navList.map((nav, i) => (
                <div key={i}>
                  <NavItem href={nav}/>
                </div>
              ))}
              <Cart />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar