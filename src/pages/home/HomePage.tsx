import { NavLink } from "react-router";
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon, PhoneIcon,
  EnvelopeIcon, ClockIcon
} from "@heroicons/react/24/outline";
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

function HomePage() {

  const contactDetails = [{
    id: 1,
    title: 'Phone:',
    name: '075 458 62356',
    iconName: PhoneIcon,
  }, {
    id: 2,
    title: 'Whatsapp:',
    name: '065 213 8495',
    iconName: ChatBubbleLeftRightIcon,
  }, {
    id: 3,
    title: 'Email:',
    name: 'optomation@gmail.co.za',
    iconName: EnvelopeIcon,
  }, {
    id: 1,
    title: 'Adress:',
    name: 'PO BOX 521, Thulamahashe 1365',
    iconName: MapPinIcon,
  }]

  const hourDetails = [{
    id: 1,
    title: 'Monday - Friday:',
    name: '8am to 5pm',
    iconName: ClockIcon,
  }, {
    id: 2,
    title: 'Saturday:',
    name: '8am to 12pm',
    iconName: ClockIcon,
  }, {
    id: 3,
    title: 'Sunday:',
    name: ' Closed',
    iconName: ClockIcon,
  }, {
    id: 4,
    title: 'Public Holidays:',
    name: 'Closed',
    iconName: ClockIcon,
  },
  ]

  return (
    <>
      <title>Thulamahashe Optometry clinic</title>
      
      <Header />    
      <motion.main 
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -40}}
        transition={{duration: 0.5}}
      >
        <section className="relative min-h-screen flex">

          <div className="absolute inset-0" >
            <img
              src='/bg-hero.png'
              alt='optometry clinic '
              className='w-full h-full object-cover'
            />
          </div>

          <div className='absolute inset-0 bg-black/60' />

          <div className='relative z-10 w-full text-center flex flex-col mt-40 gap-12 px-12'>
            <div >

              <h2 className='underline decoration-green-500 my-6'>Your optometry of choice in Thulamahasshe</h2>
            </div>

            <NavLink to="/booking">
              <Button variant='secondary'>BOOK YOUR SELF</Button>
            </NavLink>

            <div className=' mt-24 flex flex-col md:flex-row gap-3 md:gap-8 items-start justify-center'>

              <div className='flex gap-2' >
                <PhoneIcon className='h-6 w-6 text-green-500' />
                <p className='text-white/90 '>2441 2514 2524 </p>
              </div>

              <div className='flex gap-2' >
                <MapPinIcon className='h-6 w-6 text-green-500' />
                <p className='text-white/90 '>PO BOX 352, Thulamahashe 1365 </p>
              </div>
            </div>
          </div>

        </section>

        <section className='px-12 py-24 flex flex-col md:items-center'>
          <h2 className='pb-8'>About
            <span className='text-green-500 pl-2'>US</span>
          </h2>

          <p className='text-white/60 max-w-xl md:text-center'>
            Walk-ins are welcome. Our practice
            is conveniently located at 817 Rubenstein
            Dr, Moreleta Park, Pretoria, 0081
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-24 mt-24'>
            <div className='flex flex-col justify-center items-start gap-6 '>
              <h3>About our
                <span className='pl-2 underline decoration-green-500'>Practice</span>
              </h3>

              <div className='flex flex-col gap-4'>
                {
                  contactDetails.map(detail => {
                    return (
                      <div key={detail.id} className='flex justify-start gap-2'>
                        <button className='button-icon'>
                          <detail.iconName className='primary-icon' />
                        </button>

                        <p>{detail.title}</p>
                        <p>{detail.name}</p>
                      </div>
                    );
                  })
                }
              </div>

            </div>

            <div className='flex flex-col justify-center items-start gap-4 '>
              <h3>About our
                <span className='pl-2 underline decoration-green-500'>hours</span>
              </h3>

              <div className='flex flex-col gap-4'>
                {
                  hourDetails.map(detail => {
                    return (
                      <div key={detail.id} className='flex justify-start gap-2'>
                        <button className='button-sec-icon'>
                          <detail.iconName className='sec-icon' />
                        </button>

                        <p>{detail.title}</p>
                        <p>{detail.name}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center gap-8 px-6 md:px-12 py-24 border-t border-gray-700">

          {/* Heading */}
          <div className="mb-12 ">
            <h2 className="md:text-center pb-8 font-semibold">
              Book
              <span className="text-green-500 pl-2">Appointment</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-xl md:text-center">
              Schedule your visit with our professional optometrists.
              Fill in your details and we’ll get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Phone Number</label>
                <input
                  type="tel"
                  placeholder="075 123 4567"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Service</label>
                <select
                  className="bg-black/40 border text border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                >
                  <option>Eye Test</option>
                  <option>Contact Lenses</option>
                  <option>Glasses Consultation</option>
                  <option>General Checkup</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Preferred Date</label>
                <input
                  type="date"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Preferred Time</label>
                <input
                  type="time"
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-white/70">Additional Notes</label>
                <textarea
                  placeholder="Any special requests..."
                  className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition"
                >
                  Book Appointment
                </button>
              </div>

            </form>
          </div>
        </section>


      </motion.main>

      <Footer />
    </>
  );
}

export default HomePage;