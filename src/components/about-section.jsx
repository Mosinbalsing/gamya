import CountUp from "./CountUp/CountUp";

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative">
            <img
              src="/assets/placeholder.svg?height=700&width=600"
              alt="Elegant jewelry model"
              className="w-full rounded-t-full h-[700px]"
            />

            {/* Curved text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <span
                  className="absolute inset-0 flex items-center justify-center text-white text-lg font-light"
                  style={{
                    transform: "rotate(-30deg) translateY(-140px)",
                  }}
                >
                  A Touch Of Glamour, A Lifetime Of Memorie
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-sm tracking-wider">ABOUT US</span>
            <h2 className="text-4xl font-medium">
              Celebrate Life's Moments With Exquisite Jewelry
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Nunc In Arcu Et Nunc Scelerisque Dignissim. Aliquam Enim Nunc,
              Volutpat Eget Ipsum Id, Varius Sodales Mi. Vestibulum Ante Ipsum
              Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.
              Vivamus Ultricies Sed Erat Et Egestas. Phasellus Ut Ex Lacus.
              Donec Volutpat Lorem Turpis, Nec Sodales.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {[
              { number: 300, label: "Unique Designs", suffix: "+" },
              { number: 2000, label: "User Reviews", suffix: "" },
             
            ].map((stat, index) => (
              <div key={index} className="bg-amber-50/50 p-4 text-center">
                <div className="text-2xl font-bold">
                  <CountUp
                    from={0}
                    to={stat.number}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-neutral-500 italic">
            "Maecenas Porta Id Nibh Quis Imperdiet. Quisque Hendrerit, Justo
            Egestas Fermentum Pulvinar"
          </p>

          <button className="bg-black text-white px-8 py-3 flex items-center gap-2">
            Shop Now
            <span>→</span>
          </button>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-2">
          <img
            src="/assets/placeholder.svg?height=400&width=300"
            alt="Layered necklaces"
            className="w-full rounded-t-full h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
