import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function NavbarComponents() {
    return (
        <nav className="navbarComponents">
            <div>
                <Image className='dark:invert rounded-xl' src={"/Arcdev.png"} alt="Arcdev" width={50} height={70}/>
            </div>
            <div className="gap-8 flex w-[90%] justify-center font-medium text-xl">
                <Link className="navlist" href={"/"}>Home</Link>
                <Link className="navlist" href={"/about"}>About</Link>
                <Link className="navlist" href={"/contact"}>Contact</Link>
            </div>
        </nav>
    )
}
