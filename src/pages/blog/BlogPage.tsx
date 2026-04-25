/*import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection title='Blog' subtitle='Stay in touch' />
      </main>    

      <Footer />
    </>
  );
}

export default BlogPage;

*/
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction';
import SharedHeroSection from '../../components/SharedHeroSection/SharedHeroSection';

import {
  CalendarDaysIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

function BlogPage() {

  const blogPosts = [
    {
      id: 1,
      title: "How Often Should You Get an Eye Test?",
      category: "Eye Care",
      date: "March 10, 2026",
      readTime: "5 min read",
      desc: "Learn how frequently you should check your vision and why regular eye exams are essential.",
    },
    {
      id: 2,
      title: "Signs You Might Need Glasses",
      category: "Vision",
      date: "March 5, 2026",
      readTime: "4 min read",
      desc: "Discover the common symptoms that indicate you may need corrective lenses.",
    },
    {
      id: 3,
      title: "Contact Lenses vs Glasses: Which is Better?",
      category: "Guides",
      date: "February 28, 2026",
      readTime: "6 min read",
      desc: "A complete comparison to help you choose what works best for your lifestyle.",
    },
    {
      id: 4,
      title: "Protecting Your Eyes from Screen Damage",
      category: "Health",
      date: "February 20, 2026",
      readTime: "5 min read",
      desc: "Tips to reduce digital eye strain and protect your vision in the digital age.",
    },
  ];

  const hero = {
    title: 'Our',
    titleGreen: 'Blog',
    description: '  Expert insights, tips, and guides to help you maintain healthy vision and better eye care.'
  }

  return (
    <>
      <title>Blog</title>
      <Header />

      <main>

        {/* HERO */}
        <SharedHeroSection
          title={hero.title}
          titleGreen={hero.titleGreen}
          description={hero.description}
        />

        {/* SEARCH + FILTER */}
        <section className="px-6 md:px-12 py-16">

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search articles..."
              className="flex-1 bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            />

            <select className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500">
              <option>All Categories</option>
              <option>Eye Care</option>
              <option>Vision</option>
              <option>Health</option>
              <option>Guides</option>
            </select>

          </div>
        </section>


        {/* BLOG GRID */}
        <section className="px-6 md:px-12 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
              >

                {/* IMAGE */}
                <div className="h-56 bg-gray-800 flex items-center justify-center">
                  <span className="text-white/40">Image</span>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <div className="flex items-center gap-2 text-green-500 text-sm mb-2">
                    <TagIcon className="h-4 w-4" />
                    {post.category}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3">{post.title}</h3>

                  {/* META */}
                  <div className="flex items-center gap-4 text-white/50 text-xs mb-4">

                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="h-4 w-4" />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {post.readTime}
                    </div>

                  </div>

                  {/* DESC */}
                  <p className="text-white/60 text-sm mb-6">
                    {post.desc}
                  </p>

                  {/* CTA */}
                  <Button variant="secondary">
                    Read More
                  </Button>

                </div>
              </div>
            ))}

          </div>
        </section>


        {/* FEATURED / NEWSLETTER */}
        <section className="px-6 md:px-12 py-24 bg-white/5 border-y border-white/10 text-center">

          <h2>
            Stay Updated with Eye Care
            <span className="text-green-500 pl-2">Tips</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Subscribe to receive the latest articles, tips, and updates
            from our optometry experts.
          </p>

          <div className="mt-8 max-w-xl mx-auto flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black/40 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            />

            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition">
              Subscribe
            </button>

          </div>

        </section>


        {/* CTA */}
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;