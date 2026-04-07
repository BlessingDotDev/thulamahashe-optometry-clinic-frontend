'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';

import {
  StarIcon,
} from "@heroicons/react/24/solid";

function TestimonialsPage() {

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Patient",
      review: "The service was exceptional. The staff was friendly and the eye test was very thorough. I highly recommend this clinic!",
      rating: 5,
    },
    {
      id: 2,
      name: "James K.",
      role: "Patient",
      review: "Very professional and modern clinic. I got my glasses quickly and the quality is amazing.",
      rating: 5,
    },
    {
      id: 3,
      name: "Linda P.",
      role: "Patient",
      review: "They explained everything clearly and made me feel comfortable throughout the process.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael T.",
      role: "Patient",
      review: "Great experience from start to finish. Booking was easy and the service was top-notch.",
      rating: 5,
    },
    {
      id: 5,
      name: "Emily R.",
      role: "Patient",
      review: "Highly recommend for anyone needing professional eye care. Friendly and efficient team.",
      rating: 5,
    },
    {
      id: 6,
      name: "David L.",
      role: "Patient",
      review: "The best optometry clinic I’ve visited. Clean, professional, and very helpful staff.",
      rating: 5,
    },
  ];

  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center">

          <div className="absolute inset-0">
            <img
              src="/bg-hero.png"
              alt="Testimonials"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Patient
              <span className="text-green-500 pl-3">Testimonials</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Hear what our patients say about their experience with our
              professional and caring eye care services.
            </p>
          </div>
        </section>


        {/* SUMMARY / STATS */}
        <section className="px-6 md:px-12 py-16 text-center">

          <h2>
            Trusted by
            <span className="text-green-500 pl-2">Hundreds of Patients</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            We are proud to deliver exceptional service and build lasting relationships.
          </p>

          <div className="flex justify-center items-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-green-500" />
            ))}
          </div>

          <p className="text-white/60 mt-2 text-sm">
            5.0 Average Rating
          </p>

        </section>


        {/* TESTIMONIAL GRID */}
        <section className="px-6 md:px-12 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition"
              >

                {/* STARS */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-green-500" />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  “{item.review}”
                </p>

                {/* NAME */}
                <div>
                  <h3 className="text-sm">{item.name}</h3>
                  <p className="text-white/50 text-xs">{item.role}</p>
                </div>

              </div>
            ))}

          </div>
        </section>


        {/* TRUST SECTION */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10 text-center">

          <h2>
            Why Patients
            <span className="text-green-500 pl-2">Choose Us</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Our commitment to quality care, professionalism, and patient satisfaction
            is reflected in every review we receive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="mb-2">Professional Care</h3>
              <p className="text-white/60 text-sm">
                Experienced optometrists delivering expert service.
              </p>
            </div>

            <div>
              <h3 className="mb-2">Modern Equipment</h3>
              <p className="text-white/60 text-sm">
                Advanced tools for accurate diagnosis.
              </p>
            </div>

            <div>
              <h3 className="mb-2">Friendly Service</h3>
              <p className="text-white/60 text-sm">
                A welcoming environment focused on patient comfort.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}
       <CallToAction />

      </main>

      <Footer />
    </>
  );
}

export default TestimonialsPage;