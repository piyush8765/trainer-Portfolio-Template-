import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({
  brandName,
  highlightName,
  navItems = [],
  buttonText
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(navItems[0] || "");
  const [style, setStyle] = useState({});
  const navRef = useRef(null);

  // Smooth Scroll
  const handleScroll = (section, e) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setActive(section);
    setIsOpen(false);

    if (e) {
      const { offsetLeft, offsetWidth } = e.target;
      setStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  // Scroll Spy
  useEffect(() => {
    const handleScrollSpy = () => {
      navItems.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);

            const activeElement =
              navRef.current?.querySelector(
                `[data-section="${section}"]`
              );

            if (activeElement) {
              setStyle({
                left: activeElement.offsetLeft,
                width: activeElement.offsetWidth,
              });
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navItems]);

  // Default underline
  useEffect(() => {
    const first = navRef.current?.querySelector("li");
    if (first) {
      setStyle({
        left: first.offsetLeft,
        width: first.offsetWidth,
      });
    }
  }, [navItems]);

  return (
    <nav className="fixed w-full top-0 left-0 bg-[#1E3A8A] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => handleScroll(navItems[0])}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          {brandName}
          <span className="text-[#22C55E]">{highlightName}</span>
        </h1>

        {/* Desktop Menu */}
        <ul
          ref={navRef}
          className="relative hidden md:flex space-x-8 font-medium text-white"
        >
          {navItems.map((item) => (
            <li
              key={item}
              data-section={item}
              onClick={(e) => handleScroll(item, e)}
              className={`cursor-pointer capitalize transition duration-300 ${
                active === item
                  ? "text-[#22C55E]"
                  : "hover:text-[#22C55E]"
              }`}
            >
              {item}
            </li>
          ))}

          {/* Sliding Underline */}
          <div
            className="absolute -bottom-1 h-[2px] bg-[#22C55E] transition-all duration-300"
            style={style}
          ></div>
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:block bg-[#9333EA] text-white px-5 py-2 rounded-lg hover:opacity-90 transition duration-300"
        >
          {buttonText}
        </button>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E3A8A] px-6 pb-6">
          <ul className="flex flex-col space-y-4 font-medium text-white mt-4">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className={`capitalize cursor-pointer ${
                  active === item
                    ? "text-[#22C55E]"
                    : "hover:text-[#22C55E]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleScroll("contact")}
            className="mt-4 w-full bg-[#9333EA] text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
          >
            {buttonText}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;