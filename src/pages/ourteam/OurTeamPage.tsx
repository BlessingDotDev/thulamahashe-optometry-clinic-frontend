'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';
import Doctors from '../../components/Doctors';

import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function OurTeamPage() {

  const hero = {
    title: 'Meet Our',
    titleGreen: 'Team',
    description: 'Dedicated professionals committed to providing the highest quality eye care and personalized service.'
  }

  return (
    <>
      <title>OurTeam</title>
      <Header />

      <main>

        {/* HERO */}
        <SharedHeroSection
          title={hero.title}
          titleGreen={hero.titleGreen}
          description={hero.description}
        />


        {/* INTRO */}
        <section className="px-6 md:px-12 py-24 flex flex-col items-center">

          <h2 className="text-center pb-8">
            Experts You Can
            <span className="text-green-500 pl-2">Trust</span>
          </h2>

          <p className="text-white/60 max-w-3xl text-center leading-relaxed">
            Our team is made up of highly trained professionals who are passionate
            about eye care. We combine experience, advanced knowledge, and a
            patient-first approach to deliver exceptional service.
          </p>

        </section>


        {/* TEAM GRID */}
        <section className="px-6 md:px-12 pb-24">

        <div className="grid grid-cols-1 m-auto sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
                    <Doctors showfull={true} />
        
                  </div>
        </section>


        {/* VALUES SECTION */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10">

          <div className="text-center mb-16">
            <h2>
              Our Core
              <span className="text-green-500 pl-2">Values</span>
            </h2>

            <p className="text-white/60 mt-4">
              What drives our team every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <AcademicCapIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">Excellence</h3>
              <p className="text-white/60 text-sm">
                We maintain the highest standards in eye care and service.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <HeartIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">Compassion</h3>
              <p className="text-white/60 text-sm">
                We treat every patient with care, respect, and understanding.
              </p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
              <BriefcaseIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">Professionalism</h3>
              <p className="text-white/60 text-sm">
                We deliver reliable and ethical services you can trust.
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

export default OurTeamPage;