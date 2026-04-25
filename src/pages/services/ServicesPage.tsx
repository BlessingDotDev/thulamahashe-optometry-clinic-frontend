/*import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection title='Our Servies' subtitle='Get the best price, best care' />
      </main>    

      <Footer />
    </>
  );
}

export default ServicesPage;
*/

'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';

import {
  EyeIcon,
  RectangleGroupIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function ServicesPage() {

  const services = [
    {
      id: 1,
      title: "Comprehensive Eye Test",
      desc: "Thorough eye examinations to assess vision clarity, eye health, and detect early signs of conditions.",
      icon: EyeIcon,
    },
    {
      id: 2,
      title: "Prescription Glasses",
      desc: "Wide range of stylish and functional frames tailored to your vision and lifestyle.",
      icon: RectangleGroupIcon,
    },
    {
      id: 3,
      title: "Contact Lenses",
      desc: "Professional fitting and consultation for comfortable and safe contact lens use.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      id: 4,
      title: "Eye Health Screening",
      desc: "Early detection of eye diseases such as glaucoma, cataracts, and more.",
      icon: ShieldCheckIcon,
    },
    {
      id: 5,
      title: "Children’s Eye Care",
      desc: "Specialized vision care for children to support learning and development.",
      icon: UserGroupIcon,
    },
    {
      id: 6,
      title: "Vision Consultation",
      desc: "Personalized advice on improving and maintaining optimal eye health.",
      icon: SparklesIcon,
    },
  ];

  const hero = {
    title: 'Our',
    titleGreen: 'Services',
    description: 'Professional, reliable, and modern eye care services designed to keep your vision clear and your eyes healthy.'
  }

  return (
    <>
      <title>Services</title>
      <Header />

      <main>

        {/* HERO SECTION */}
        <SharedHeroSection
          title={hero.title}
          titleGreen={hero.titleGreen}
          description={hero.description}
        />
        
        {/* SERVICES GRID */}
        <section className="px-6 md:px-12 py-24">

          <div className="text-center mb-16">
            <h2>
              What We
              <span className="text-green-500 pl-2">Offer</span>
            </h2>

            <p className="text-white/60 mt-4">
              High-quality services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition"
              >
                <service.icon className="h-10 w-10 text-green-500 mb-4" />

                <h3 className="mb-3">{service.title}</h3>

                <p className="text-white/60 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* PROCESS SECTION */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10">

          <div className="text-center mb-16">
            <h2>
              Our
              <span className="text-green-500 pl-2">Process</span>
            </h2>

            <p className="text-white/60 mt-4">
              Simple, smooth, and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div>
              <h3 className="text-green-500 mb-3">01</h3>
              <h4 className="mb-2">Book Appointment</h4>
              <p className="text-white/60 text-sm">
                Schedule your visit online or via phone quickly and easily.
              </p>
            </div>

            <div>
              <h3 className="text-green-500 mb-3">02</h3>
              <h4 className="mb-2">Eye Examination</h4>
              <p className="text-white/60 text-sm">
                Our optometrists perform a detailed and professional check.
              </p>
            </div>

            <div>
              <h3 className="text-green-500 mb-3">03</h3>
              <h4 className="mb-2">Get Results & Care</h4>
              <p className="text-white/60 text-sm">
                Receive your prescription and personalized care plan.
              </p>
            </div>

          </div>
        </section>


        {/* TRUST / BENEFITS */}
        <section className="px-6 md:px-12 py-24 flex flex-col items-center">

          <h2 className="text-center pb-8">
            Your Vision,
            <span className="text-green-500 pl-2">Our Priority</span>
          </h2>

          <p className="text-white/60 max-w-2xl text-center mb-16">
            We are committed to providing the highest level of care using
            modern technology and a patient-first approach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="mb-2">Modern Equipment</h3>
              <p className="text-white/60 text-sm">
                Accurate diagnosis using advanced tools.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="mb-2">Experienced Team</h3>
              <p className="text-white/60 text-sm">
                Skilled professionals you can trust.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="mb-2">Affordable Care</h3>
              <p className="text-white/60 text-sm">
                Quality services at competitive prices.
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

export default ServicesPage;