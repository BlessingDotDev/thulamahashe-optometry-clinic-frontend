
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';
import Doctors from '../../components/Doctors';

import {
  EyeIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

function AboutUsPage() {

  const features = [
    {
      id: 1,
      title: "Advanced Eye Care",
      desc: "We use modern diagnostic equipment to ensure accurate and reliable eye examinations.",
      icon: EyeIcon,
    },
    {
      id: 2,
      title: "Patient-Centered Approach",
      desc: "Every patient receives personalized care tailored to their unique vision needs.",
      icon: UserGroupIcon,
    },
    {
      id: 3,
      title: "Premium Service",
      desc: "From consultation to treatment, we deliver a seamless and comfortable experience.",
      icon: SparklesIcon,
    },
    {
      id: 4,
      title: "Trusted Professionals",
      desc: "Our qualified optometrists are committed to excellence and patient satisfaction.",
      icon: ShieldCheckIcon,
    },
  ];

  const hero = {
    title: 'About',
    titleGreen: 'Our Practice',
    description: 'Delivering exceptional eye care with precision, compassion, and modern technology in Pretoria.'
  }

  return (
    <>
      <title>About</title>
      <Header />

      <main>

        {/* HERO SECTION */}
        <SharedHeroSection 
          title={hero.title} 
          titleGreen={hero.titleGreen} 
          description={hero.description}
        />

        {/* OUR STORY */}
        <section className="px-6 md:px-12 py-24 flex flex-col items-center">

          <h2 className="text-center pb-8">
            Our
            <span className="text-green-500 pl-2">Story</span>
          </h2>

          <p className="text-white/60 max-w-3xl text-center leading-relaxed">
            Our optometry practice was founded with a simple mission:
            to provide high-quality, accessible eye care to the community.
            Over the years, we have built a reputation for professionalism,
            precision, and genuine care for our patients.
          </p>

          <p className="text-white/60 max-w-3xl text-center mt-6 leading-relaxed">
            Whether you need a routine eye test, new glasses, or specialized
            care, we are committed to helping you see clearly and live better.
          </p>
        </section>


        {/* FEATURES / WHY US */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10">

          <div className="text-center mb-16">
            <h2>
              Why Choose
              <span className="text-green-500 pl-2">Us</span>
            </h2>

            <p className="text-white/60 mt-4">
              We combine expertise, technology, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item) => (
              <div
                key={item.id}
                className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition"
              >
                <item.icon className="h-10 w-10 text-green-500 mb-4" />

                <h3 className="mb-2">{item.title}</h3>

                <p className="text-white/60 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* TEAM SECTION */}
        <section className="px-6 md:px-12 py-24 flex flex-col items-center">

          <h2 className="pb-8 text-center">
            Meet Our
            <span className="text-green-500 pl-2">Team</span>
          </h2>

          <p className="text-white/60 max-w-xl text-center mb-16">
            Our team of dedicated professionals is here to provide you
            with the best eye care experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">

            <Doctors showfull={false} />

          </div>
        </section>


        {/* CTA SECTION */}
        <CallToAction />

      </main>

      <Footer />
    </>
  );
}

export default AboutUsPage;