function About({
  title,
  description1,
  description2,
  stats = [],
  image
}) {
  return (
    <section
      className="py-24 bg-gradient-to-br from-[#F1F5FF] via-white to-[#EEF2FF] relative overflow-hidden"
      id="about"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#9333EA] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#22C55E] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* RIGHT - Content */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
            {title}
          </h3>

          <div className="h-1 w-24 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mt-4 mb-6 rounded-full"></div>

          <p className="text-gray-700 leading-relaxed text-lg">
            {description1}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            {description2}
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h4 className="text-2xl font-bold text-[#9333EA]">
                  {item.number}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT - Profile Photo */}
        <div className="flex justify-center">
          <div className="p-[6px] rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#9333EA] to-[#22C55E] shadow-2xl">
            <img
              src={image}
              alt="Trainer"
              className="w-80 h-80 object-cover rounded-full bg-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;