
import Link from 'next/link'

const Hero = () => {
  return (
    <section className=" flex min-h-[calc(80vh-70px)] items-center justify-center px-4 text-center">

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Small label */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#7A2637]/60 bg-[#3F0D18]/60 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#D9C8C3]">
          ✦ WEB DEVELOPMENT AGENCY
        </span>

        {/* Main heading */}
        <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#F7F1E8] sm:text-6xl lg:text-7xl">
          Websites That
          <br />
          <span className="text-[#C78A98]">
            Move Businesses Forward.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#D9C8C3] sm:text-lg">
          We design and develop modern websites
          that help businesses build trust, showcase
          their services, and grow online.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="rounded-lg bg-[#F7F1E8] px-7 py-3.5 font-semibold text-[#3F0D18] transition duration-300 hover:bg-cream"
          >
            Start a Project ↗
          </Link>

          <Link
            href="/projects"
            className="rounded-lg border border-[#7A2637] px-7 py-3.5 font-semibold text-[#F7F1E8] transition duration-300 hover:bg-[#5A1725]"
          >
            See Our Work
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Hero
