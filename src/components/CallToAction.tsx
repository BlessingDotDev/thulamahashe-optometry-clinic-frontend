import Button from './Button';
import { NavLink } from 'react-router';

function CallToAction() {
  return (
    <section className="px-6 md:px-12 py-24 text-center border-t border-white/10">

      <h2>
        Book Your Eye Test
        <span className="text-green-500 pl-2">Today</span>
      </h2>

      <p className="text-white/60 mt-4 text-center">
        Take the first step towards better vision and healthier eyes.
      </p>

      <NavLink to="/booking">
        <Button variant="secondary" className="mt-8">Book Appointment</Button>
      </NavLink>

    </section>
  );
}

export default CallToAction;