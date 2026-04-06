import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-700 px-8 py-16">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bg-hero.png"
          alt="optometry clinic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Content */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-start gap-12 text-white">

        {/* ABOUT */}
        <div>
          <h4 className="pb-4 text-lg font-semibold">About Us</h4>
          <p className="text-white/70 text-sm leading-relaxed max-w-xl">
            Your trusted optometry clinic in Thulamahashe. We provide
            professional eye care services with modern equipment and
            a patient-first approach.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="pb-4 text-lg font-semibold">Services</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>Eye Testing</li>
            <li>Prescription Glasses</li>
            <li>Contact Lenses</li>
            <li>Eye Health Check</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="pb-4 text-lg font-semibold">Contact</h4>

          <div className="flex flex-col gap-3 text-sm text-white/70">

            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-green-500" />
              <p>075 458 62356</p>
            </div>

            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-500" />
              <p>065 213 8495</p>
            </div>

            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-green-500" />
              <p>optomation@gmail.co.za</p>
            </div>

            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-green-500" />
              <p>PO BOX 521, Thulamahashe 1365</p>
            </div>

          </div>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="pb-4 text-lg font-semibold">Working Hours</h4>

          <div className="flex flex-col gap-3 text-sm text-white/70">

            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-green-500" />
              <p>Mon - Fri: 8am – 5pm</p>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-green-500" />
              <p>Saturday: 8am – 12pm</p>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-green-500" />
              <p>Sunday: Closed</p>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-green-500" />
              <p>Public Holidays: Closed</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mt-16 pt-6 border-t border-gray-800 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Optometry Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;