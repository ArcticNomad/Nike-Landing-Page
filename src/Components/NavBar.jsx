import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../Constants/index.js";
import {hamburger} from "../assets/icons/index.js";

export default function NavBar(){
    return (
        <header className='absolute w-full padding-x py-7 z-10'>
            <nav className='flex justify-between items-center max-container '>
                <a href={headerLogo}>
                <img src={headerLogo} alt="logo"/>
                </a>
                <ul className='flex justify-center items-center gap-16 flex-1 max-lg:hidden' >
                    {navLinks.map((item)=>(
                        <li key={item} className='hover:text-coral-red'>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                            {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-2 font-montserrat leading-normal max-lg:hidden mr-4 font-medium text-lg'>
                <a href="/">
                    Sign In
                </a>
                <span>/</span>
                <a href="/">
                    Explore Now
                </a>
                </div>

                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="hamburger" height={30} width={20} className='ml-10'/>
                </div>

            </nav>
        </header>
    )
}