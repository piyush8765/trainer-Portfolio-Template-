import { useState } from "react";

const Contact = ({
  title,
  subtitle,
  phone,
  whatsapp,
  location,
  availability,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 bg-[#F8FAFC] text-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {title?.split(" ")[0]}{" "}
            <span className="text-[#22C55E]">
              {title?.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#9333EA] to-[#22C55E] mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* FORM */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-[#22C55E] mb-8">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#9333EA]"
              />

              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#9333EA]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 h-32 outline-none focus:border-[#9333EA]"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold 
                           bg-gradient-to-r from-[#9333EA] to-[#1E3A8A] 
                           text-white hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="space-y-6">

            <div
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#22C55E] shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location
                  )}`,
                  "_blank"
                )
              }
            >
              <h4 className="text-xl font-bold text-[#22C55E]">📍 Location</h4>
              <p className="text-gray-600 mt-2">{location}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#22C55E] shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-bold text-[#22C55E]">⏰ Availability</h4>
              <p className="text-gray-600 mt-2">{availability}</p>
            </div>

            <div
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#22C55E] shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => window.open(`tel:${phone}`)}
            >
              <h4 className="text-xl font-bold text-[#22C55E]">📞 Call</h4>
              <p className="text-gray-600 mt-2">{phone}</p>
            </div>

            <div
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#22C55E] shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => window.open(`https://wa.me/${whatsapp}`, "_blank")}
            >
              <h4 className="text-xl font-bold text-[#22C55E]">💬 WhatsApp</h4>
              <p className="text-gray-600 mt-2">Chat with me</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;