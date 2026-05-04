"use client";
import {
  FaBookOpen,
  FaHeartbeat,
  FaFemale,
  FaBriefcase,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";

export default function OurProgrammes() {
  const programmes = [
    {
      title: "EDUCATION",
      desc: "Education, nutrition and holistic development of children",
      icon: FaBookOpen,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      title: "HEALTHCARE",
      desc: "Taking healthcare services to doorsteps of hard to reach communities",
      icon: FaHeartbeat,
      color: "text-purple-400",
      bg: "bg-purple-100",
    },
    {
      title: "WOMEN EMPOWERMENT",
      desc: "Empowering adolescent girls & women through community engagement",
      icon: FaFemale,
      color: "text-cyan-500",
      bg: "bg-cyan-100",
    },
    {
      title: "LIVELIHOOD",
      desc: "Skill training and placement support for underprivileged youth",
      icon: FaBriefcase,
      color: "text-orange-400",
      bg: "bg-orange-100",
    },
    {
      title: "EMPOWERING GRASSROOTS",
      desc: "Helping community-based organizations become locally sustainable",
      icon: FaLeaf,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "DISASTER RESPONSE",
      desc: "Reach out and respond to the needs of the disaster-affected people",
      icon: FaHandsHelping,
      color: "text-red-400",
      bg: "bg-red-100",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      
      {/* Heading */}
      <h2 className="text-center text-green-500 text-2xl md:text-3xl font-bold mb-12">
        OUR PROGRAMMES
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
        
        {programmes.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="flex items-start gap-4 group hover:translate-x-1 transition"
            >
              
              {/* Icon */}
              <div className={`min-w-[60px] p-3 rounded-full ${item.bg}`}>
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>

              {/* Content */}
              <div>
                <h3
                  className={`font-bold text-lg md:text-xl underline ${item.color}`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm mt-2 max-w-md">
                  {item.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}