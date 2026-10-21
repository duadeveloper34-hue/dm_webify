
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="px-2 py-4 text-cream">
      <nav className="mx-auto flex w-full  items-center justify-between">

        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/webify.png"
            alt="DM Webify logo"
            width={88}
            height={80}
            priority
          />
          <span className="text-xl font-bold text-cream">
            Webify
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-cream md:flex ml-70 mr-40">
          <li>
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="transition hover:text-white">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-cream px-5 py-3 text-sm font-semibold text-burgundy  hover:opacity-90 sm:inline-flex  ml-30"
        >
          Start a Project 
        </Link>

      </nav>
    </header>
  )
}

export default Navbar
