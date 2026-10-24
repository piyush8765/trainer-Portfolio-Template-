import { FaQuoteLeft } from "react-icons/fa";

function Testimonials({ title, subtitle, testimonials = [] }) {
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg 
                         border-t-4 border-[#9333EA]
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300"
            >
              <FaQuoteLeft className="text-[#22C55E] text-2xl mb-4" />

              <p className="text-gray-600 leading-relaxed">
                {item.feedback}
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1E3A8A]">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;