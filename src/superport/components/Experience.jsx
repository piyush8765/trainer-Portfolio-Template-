function Experience({ title, subtitle, experiences = [] }) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            {title}
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col md:flex-row overflow-hidden"
            >
              {/* Left Accent */}
              <div className="w-full md:w-2 bg-gradient-to-b from-[#9333EA] to-[#22C55E]"></div>

              {/* Content */}
              <div className="p-8 flex-1">

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    {exp.role}
                  </h3>

                  <span className="text-sm font-semibold text-[#22C55E]">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {exp.place}
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {exp.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;