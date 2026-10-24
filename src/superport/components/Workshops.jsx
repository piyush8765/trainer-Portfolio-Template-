import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Workshops({
  title,
  workshops = [],
  impactStats = [],
}) {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="workshops">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            {title}
          </h2>
          <div className="h-1 w-28 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE – Timeline */}
          <div className="relative border-l-4 border-[#9333EA] pl-10 space-y-16">

            {workshops.map((workshop, index) => (
              <div key={index} className="relative">

                <div className="absolute -left-[18px] top-2 w-5 h-5 bg-[#22C55E] rounded-full border-4 border-white shadow"></div>

                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  {workshop.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <FaCalendarAlt className="mr-2 text-[#9333EA]" />
                  {workshop.date}
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <FaMapMarkerAlt className="mr-2 text-[#22C55E]" />
                  {workshop.location}
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {workshop.desc}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE – Impact Card */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#9333EA] text-white p-10 rounded-3xl shadow-2xl">

            <h3 className="text-2xl font-bold mb-8">
              Impact & Reach
            </h3>

            <div className="space-y-8">
              {impactStats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-4xl font-bold text-[#22C55E]">
                    {stat.number}
                  </h4>
                  <p className="text-sm opacity-80 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Workshops;