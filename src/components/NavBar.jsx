import iconBurguer from '../assets/icon-hamburger.svg'
import { useState } from 'react'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className=''>
            <ul className={`bg-white w-[300px] absolute right-6 top-[100px] flex-col justify-center items-center gap-6 p-8 text-dark-grayish-blue font-barlow text-lg after: after:absolute after:top-[-24px] after:right-0 after:content-[""] after:border-[12px] after:border-white after:border-t-transparent after:border-l-transparent z-10 ${isOpen ? 'flex' : 'hidden'}
            
            sm:hidden
            `}>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li className='bg-yellow p-[10px_20px] rounded-3xl text-very-dark-desaturated-blue font-fraunces uppercase font-bold text-sm'><a href="#">Contact</a></li>
            </ul>
            <img className='cursor-pointer sm:hidden' onClick={handleClick} src={iconBurguer} alt="" />

            <ul className='hidden sm:flex items-center gap-8 text-white'>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li className='bg-white p-[10px_15px] rounded-3xl text-very-dark-desaturated-blue font-fraunces uppercase font-bold text-sm hover:bg-white-opacity hover:text-white '><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}