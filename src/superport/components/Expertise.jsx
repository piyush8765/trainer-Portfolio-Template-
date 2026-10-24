function Expertise({ title, subtitle, skills = [] }) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            {title}
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg 
                         border-t-4 border-[#9333EA] 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full 
                              bg-gradient-to-r from-[#9333EA] to-[#22C55E] 
                              text-white text-xl mb-6">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E3A8A]">
                {skill.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;