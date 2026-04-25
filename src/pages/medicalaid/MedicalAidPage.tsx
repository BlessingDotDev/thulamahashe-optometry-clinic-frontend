import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';

import {
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { pageTransition } from "../../data/animaions";

function MedicalAidPage() {

  const medicalAids = [
    "Discovery Health",
    "Momentum Health",
    "Bonitas",
    "Fedhealth",
    "Medshield",
    "Bestmed",
    "KeyHealth",
    "Other (Please Contact Us)",
  ];

  const hero = {
    title: 'Medical Aid &',
    titleGreen: 'Insurance',
    description: ' We work with leading medical aid providers to make your eye care accessible and affordable.'
  }

  return (
    <>
      <title>MedicalAid</title>

      <motion.main
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >

        {/* HERO */}
        <SharedHeroSection
          title={hero.title}
          titleGreen={hero.titleGreen}
          description={hero.description}
        />


        {/* INTRO */}
        <section className="px-6 md:px-12 py-24 text-center">

          <h2>
            Hassle-Free
            <span className="text-green-500 pl-2">Claims Process</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Our team assists you with medical aid claims to ensure a smooth
            and stress-free experience. We aim to help you maximize your benefits.
          </p>

        </section>


        {/* MEDICAL AID LIST */}
        <section className="px-6 md:px-12 pb-24">

          <h2 className="text-center mb-12">
            Accepted
            <span className="text-green-500 pl-2">Medical Aids</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

            {medicalAids.map((aid, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/70"
              >
                {aid}
              </div>
            ))}

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10 text-center">

          <h2>
            How It
            <span className="text-green-500 pl-2">Works</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Simple steps to use your medical aid at our clinic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

            <div>
              <ClipboardDocumentCheckIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">1. Bring Your Details</h3>
              <p className="text-white/60 text-sm">
                Provide your medical aid card and identification during your visit.
              </p>
            </div>

            <div>
              <ShieldCheckIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">2. We Verify Coverage</h3>
              <p className="text-white/60 text-sm">
                Our team checks your benefits and available coverage.
              </p>
            </div>

            <div>
              <BanknotesIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="mb-2">3. Claim Processing</h3>
              <p className="text-white/60 text-sm">
                We assist with submitting claims to your provider.
              </p>
            </div>

          </div>

        </section>


        {/* IMPORTANT INFO */}
        <section className="px-6 md:px-12 py-24">

          <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-2xl p-8">

            <h2 className="mb-6">
              Important
              <span className="text-green-500 pl-2">Information</span>
            </h2>

            <ul className="text-white/60 space-y-4 text-sm">
              <li>• Coverage depends on your specific medical aid plan.</li>
              <li>• Some services may require co-payment.</li>
              <li>• We recommend confirming your benefits before your visit.</li>
              <li>• Contact us if you are unsure about your coverage.</li>
            </ul>

          </div>

        </section>


        {/* CTA */}
        <CallToAction />

      </motion.main>
    </>
  );
}

export default MedicalAidPage;