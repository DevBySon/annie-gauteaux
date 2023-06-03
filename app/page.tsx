'use client'

import About from './About/page';
import Annie from './Annie/page';
import Menu from './Menu/page';
import Navbar from './components/Navbar/Navbar';
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathName = usePathname();
  console.log(pathName);
  const renderComponent = () => {
    if (pathName == '/home') {
      return <Annie/>
    } else if (pathName == '/menu') {
      return <Menu/>
    }else if (pathName == '/about') {
      return <About/>
    } else {
      return null;
    }
  }
  return (
    <>
      <Navbar />
      {pathName === '/about' && <Menu />}
    </>
  )
}
