function Achievements({ title, subtitle, achievements = [] }) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            {title}
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg 
                         border-t-4 border-[#9333EA] 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300"
            >
              <h3 className="text-4xl font-bold text-[#1E3A8A]">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-600 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;