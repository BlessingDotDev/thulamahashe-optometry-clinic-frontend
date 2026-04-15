import Button from '../Button';
import { NavLink } from 'react-router';

function SharedHeroSection({title, titleGreen, description}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">

      <div className="absolute inset-0">
        <img
          src="/bg-hero.png"
          alt="About Optometry"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-bold ">
          {title}
          <span className="text-green-500 pl-3">
            {titleGreen}
          </span>
        </h1>

        <p className="text-white/70 mt-6 max-w-2xl mx-auto">
          {description}
        </p>

        <NavLink to='/booking' >
          <Button variant="secondary" className="mt-8">Book Appointment</Button>
        </NavLink>
      </div>
    </section>
  )
}

export default SharedHeroSection;