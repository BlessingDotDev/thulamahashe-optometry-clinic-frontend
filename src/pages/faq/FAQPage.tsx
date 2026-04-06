'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';

import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function FAQPage() {

  const faqs = [
    {
      question: "How long does an eye test take?",
      answer: "A comprehensive eye test usually takes between 20 to 40 minutes depending on your needs and whether additional tests are required.",
    },
    {
      question: "Do I need to book an appointment?",
      answer: "Appointments are recommended to avoid waiting times, but walk-ins are welcome depending on availability.",
    },
    {
      question: "How often should I get my eyes tested?",
      answer: "It is recommended to have an eye test every 1 to 2 years, or as advised by your optometrist.",
    },
    {
      question: "Do you accept medical aid?",
      answer: "Yes, we accept selected medical aids. Please contact us to confirm if your provider is supported.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring your ID, current glasses or contact lenses, and your medical aid details if applicable.",
    },
    {
      question: "Can children have eye tests?",
      answer: "Yes, we provide specialized eye care for children to support their vision and development.",
    },
    {
      question: "Do you offer contact lens fittings?",
      answer: "Yes, we provide professional contact lens consultations and fittings for maximum comfort and safety.",
    },
    {
      question: "What are the signs that I need glasses?",
      answer: "Common signs include blurry vision, headaches, eye strain, and difficulty seeing at night.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section className="relative min-h-[50vh] flex items-center justify-center">

          <div className="absolute inset-0">
            <img
              src="/bg-hero.png"
              alt="FAQ"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Frequently Asked
              <span className="text-green-500 pl-3">Questions</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Find answers to common questions about our services,
              appointments, and eye care.
            </p>
          </div>
        </section>


        {/* SEARCH */}
        <section className="px-6 md:px-12 py-12">

          <div className="max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            />
          </div>

        </section>


        {/* FAQ LIST */}
        <section className="px-6 md:px-12 pb-24">

          <div className="max-w-3xl mx-auto flex flex-col gap-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium">{faq.question}</span>

                  <ChevronDownIcon
                    className={`h-5 w-5 text-green-500 transition ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                {activeIndex === index && (
                  <div className="px-6 pb-6 text-white/60 text-sm">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>
        </section>


        {/* EXTRA HELP SECTION */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10 text-center">

          <h2>
            Still Have
            <span className="text-green-500 pl-2">Questions?</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            If you couldn’t find the answer you were looking for,
            feel free to contact us directly.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <Button variant="secondary">
              Contact Us
            </Button>

            <Button variant="secondary">
              Book Appointment
            </Button>

          </div>

        </section>


        {/* CTA */}
       <CallToAction />

      </main>

      <Footer />
    </>
  );
}

export default FAQPage;