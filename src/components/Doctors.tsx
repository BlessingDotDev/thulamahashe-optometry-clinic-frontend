import Manzini from '../assets/images/doctors-profile/doctor-1.png';
import Mkhonto from '../assets/images/doctors-profile/doctor-2.png';
import Mthembu from '../assets/images/doctors-profile/doctor-3.png';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const doctors = [{
  id: crypto.randomUUID(),
  name: 'Dr Manzini',
  role: 'Senior Optometrist',
  experience: "10+ Years Experience",
  desc: "Specializes in comprehensive eye exams, vision correction, and patient-centered care.",
  image: Manzini,
}, {
  id: crypto.randomUUID(),
  name: 'Dr Mkhonto',
  role: 'Optometrist',
  experience: "8+ Years Experience",
  desc: "Expert in contact lenses and advanced eye diagnostics.",
  image: Mkhonto,
}, {
  id: crypto.randomUUID(),
  name: 'Dr Mthembu',
  role: "Eye Care Specialist",
  experience: "6+ Years Experience",
  desc: "Focused on early detection and treatment of eye conditions.",
  image: Mthembu,
}
];

type DoctorsProps = {
  showfull: boolean
}

function Doctors({ showfull }: DoctorsProps) {
  return (
    <>
      {
        doctors.map((member) => (
          <div
            key={member.id}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
          >

            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}
              className="h-auto w-full object-cover object-top"
            />

            {/* INFO */}
            <div className="p-6">

              <h3>{member.name}</h3>
              <p className="text-green-500 text-sm mt-1">
                {member.role}
              </p>

              {showfull && (
                <>
                  <div className="flex items-center gap-2 mt-3 text-white/60 text-sm">
                    <BriefcaseIcon className="h-4 w-4" />
                    {member.experience}
                  </div>

                  <p className="text-white/60 text-sm mt-4">
                    {member.desc}
                  </p>
                </>
              )}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Doctors;