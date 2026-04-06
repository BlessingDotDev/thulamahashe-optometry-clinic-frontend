'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';

import {
  CalendarDaysIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { SiWhatsapp } from "react-icons/si";

function BookingPage() {

  const services = [
    "Eye Test",
    "Contact Lenses",
    "Glasses Consultation",
    "Children’s Eye Care",
    "General Checkup",
  ];

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "14:00", "15:00", "16:00"
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
              alt="Book Appointment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Book an
              <span className="text-green-500 pl-3">Appointment</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Schedule your visit with our professional optometrists quickly and easily.
            </p>
          </div>
        </section>


        {/* QUICK ACTIONS */}
        <section className="px-6 md:px-12 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CALL */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <PhoneIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">Call to Book</h3>
              <p className="text-white/60 text-sm mb-4">
                Speak directly with us for immediate booking.
              </p>
              <Button variant="secondary">Call Now</Button>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">WhatsApp Booking</h3>
              <p className="text-white/60 text-sm mb-4">
                Chat with us and book instantly.
              </p>
              <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition mx-auto">
                <SiWhatsapp />
                Chat on WhatsApp
              </button>
            </div>

          </div>
        </section>


        {/* BOOKING FORM */}
        <section className="px-6 md:px-12 pb-24">

          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

            <h2 className="mb-6">
              Complete Your
              <span className="text-green-500 pl-2">Booking</span>
            </h2>

            <p className="text-white/60 mb-8">
              Fill in your details and we’ll confirm your appointment shortly.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Phone Number</label>
                <input
                  type="tel"
                  placeholder="075 123 4567"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Email Address</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* SERVICE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Select Service</label>
                <select className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500">
                  {services.map((service, i) => (
                    <option key={i}>{service}</option>
                  ))}
                </select>
              </div>

              {/* DATE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70 flex items-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* TIME */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70 flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  Preferred Time
                </label>
                <select className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500">
                  {timeSlots.map((time, i) => (
                    <option key={i}>{time}</option>
                  ))}
                </select>
              </div>

              {/* NOTES */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-white/70">Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Any special requests or symptoms..."
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* SUBMIT */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition"
                >
                  Confirm Booking
                </button>
              </div>

            </form>

          </div>
        </section>


        {/* INFO SECTION */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-t border-white/10 text-center">

          <h2>
            What to Expect
            <span className="text-green-500 pl-2">During Your Visit</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Your appointment will include a comprehensive eye examination,
            professional consultation, and personalized recommendations
            tailored to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="mb-2">1. Check-In</h3>
              <p className="text-white/60 text-sm">
                Quick registration and patient details confirmation.
              </p>
            </div>

            <div>
              <h3 className="mb-2">2. Eye Test</h3>
              <p className="text-white/60 text-sm">
                Comprehensive vision and eye health examination.
              </p>
            </div>

            <div>
              <h3 className="mb-2">3. Consultation</h3>
              <p className="text-white/60 text-sm">
                Receive results and expert recommendations.
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

export default BookingPage;