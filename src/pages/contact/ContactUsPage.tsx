/*import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

function ContactUsPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection title='contact' subtitle='get in touch with us' />
      </main>    

      <Footer />
    </>
  );
}

export default ContactUsPage;
*/

'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';

import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { SiWhatsapp } from "react-icons/si";

function ContactUsPage() {

  const contactDetails = [
    {
      id: 1,
      title: "Phone",
      value: "075 458 62356",
      icon: PhoneIcon,
    },
    {
      id: 2,
      title: "WhatsApp",
      value: "065 213 8495",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: 3,
      title: "Email",
      value: "optomation@gmail.co.za",
      icon: EnvelopeIcon,
    },
    {
      id: 4,
      title: "Location",
      value: "817 Rubenstein Dr, Moreleta Park, Pretoria",
      icon: MapPinIcon,
    },
  ];

  const hours = [
    { id: 1, day: "Monday - Friday", time: "8am - 5pm" },
    { id: 2, day: "Saturday", time: "8am - 12pm" },
    { id: 3, day: "Sunday", time: "Closed" },
    { id: 4, day: "Public Holidays", time: "Closed" },
  ];


  const hero = {
    title: 'Contact',
    titleGreen: 'Us',
    description: " We're here to help. Reach out to book an appointment or ask any questions about your eye care."
  }

  return (
    <>
      <title>ContactUs</title>
      <Header />

      <main>

        {/* HERO */}
        <SharedHeroSection
          title={hero.title}
          titleGreen={hero.titleGreen}
          description={hero.description}
        />

        {/* CONTACT INFO CARDS */}
        <section className="px-6 md:px-12 py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition"
              >
                <item.icon className="h-8 w-8 text-green-500 mb-4" />

                <h3 className="mb-2">{item.title}</h3>

                <p className="text-white/60 text-sm">
                  {item.value}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* CONTACT FORM + HOURS */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <h2 className="mb-6">
                Send a
                <span className="text-green-500 pl-2">Message</span>
              </h2>

              <p className="text-white/60 mb-8">
                Fill in the form and we’ll get back to you as soon as possible.
              </p>

              <form className="flex flex-col gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message..."
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                />

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>

              </form>
            </div>


            {/* HOURS + QUICK CONTACT */}
            <div className="flex flex-col gap-12">

              {/* HOURS */}
              <div>
                <h2 className="mb-6">
                  Opening
                  <span className="text-green-500 pl-2">Hours</span>
                </h2>

                <div className="flex flex-col gap-4">
                  {hours.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b border-white/10 pb-2"
                    >
                      <span className="text-white/80">{item.day}</span>
                      <span className="text-white/60">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>


              {/* QUICK ACTIONS */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">

                <h3 className="mb-4">Quick Contact</h3>

                <p className="text-white/60 mb-6 text-sm">
                  Need immediate assistance? Reach us directly.
                </p>

                <div className="flex flex-col gap-4">

                  <Button variant="secondary">
                    Call Now
                  </Button>

                  <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition">
                    <SiWhatsapp />
                    WhatsApp Us
                  </button>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* MAP SECTION */}
        <section className="px-6 md:px-12 py-24">

          <h2 className="text-center mb-12">
            Find
            <span className="text-green-500 pl-2">Us</span>
          </h2>

          <div className="w-full h-[400px] bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center">
            <p className="text-white/50">
              Google Maps Embed Here
            </p>
          </div>

        </section>


        {/* CTA */}
        <CallToAction />

      </main>

      <Footer />
    </>
  );
}

export default ContactUsPage;