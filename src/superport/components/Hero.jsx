function Hero({
  backgroundImage,
  heading,
  highlightText,
  description,
  primaryBtnText,
  secondaryBtnText,
  statsText
}) {
  return (
    <section
      id="home"
      className="relative pt-24 min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center text-white">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {heading}
            <span className="text-[#9333EA]"> {highlightText} </span>
          </h2>

          <p className="mt-6 text-gray-200 text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#9333EA] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              {primaryBtnText}
            </button>

            <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              {secondaryBtnText}
            </button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#22C55E] rounded-full"></div>
            <p className="text-sm text-gray-300">
              {statsText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
