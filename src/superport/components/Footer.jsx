import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer({
  brandName,
  highlightName,
  description,
  quickLinks = [],
  services = [],
  email,
  phone,
  facebook,
  instagram,
  linkedin,
}) {
  return (
    <footer className="bg-gradient-to-br from-[#1E3A8A] via-[#5B3CC4] to-[#9333EA] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">
              {brandName}
              <span className="text-[#22C55E]">{highlightName}</span>
            </h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#22C55E] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white/80">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-white transition cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#22C55E] mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-white/80">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#22C55E] mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-white/80">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>{email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>{phone}</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center 
                             bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <FaFacebookF />
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center 
                             bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <FaInstagram />
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center 
                             bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <FaLinkedinIn />
                </a>
              )}

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} {brandName}{highlightName}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;