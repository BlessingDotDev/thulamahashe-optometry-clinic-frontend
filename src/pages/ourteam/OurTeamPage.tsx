/*import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

function OurTeamPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection title='Our Team' subtitle='Get the best of care for your eyes' />
      </main>    

      <Footer />
    </>
  );
}

export default OurTeamPage;
*/
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';

import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function OurTeamPage() {

  const teamMembers = [
    {
      id: 1,
      name: "Dr. John Doe",
      role: "Senior Optometrist",
      experience: "10+ Years Experience",
      desc: "Specializes in comprehensive eye exams, vision correction, and patient-centered care.",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      role: "Optometrist",
      experience: "8+ Years Experience",
      desc: "Expert in contact lenses and advanced eye diagnostics.",
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      role: "Eye Care Specialist",
      experience: "6+ Years Experience",
      desc: "Focused on early detection and treatment of eye conditions.",
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
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Meet Our
              <span className="text-green-500 pl-3">Team</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Dedicated professionals committed to providing the highest
              quality eye care and personalized service.
            </p>
          </div>
        </section>


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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
              >

                {/* IMAGE */}
                <div className="h-72 bg-gray-800 flex items-center justify-center">
                  <span className="text-white/40">Image</span>
                </div>

                {/* INFO */}
                <div className="p-6">

                  <h3>{member.name}</h3>
                  <p className="text-green-500 text-sm mt-1">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-white/60 text-sm">
                    <BriefcaseIcon className="h-4 w-4" />
                    {member.experience}
                  </div>

                  <p className="text-white/60 text-sm mt-4">
                    {member.desc}
                  </p>

                </div>
              </div>
            ))}

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