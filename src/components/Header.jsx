import logo from '../assets/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
    return (
        <header className='absolute w-full flex justify-between items-center p-[30px_24px]'>
            <img src={logo} alt="" />
            <NavBar />
        </header>
    )
}