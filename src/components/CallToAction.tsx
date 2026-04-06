import Button from './Button';

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

      <div className="mt-8">
        <Button variant="secondary">Book Appointment</Button>
      </div>

    </section>
  );
}

export default CallToAction;