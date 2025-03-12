import  React from "react"
import { Gift, Percent, Truck, DollarSign } from "lucide-react"



const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-neutral-200 rounded-sm">
      <div className="text-amber-700 mb-4">{icon}</div>
      <h3 className="text-xl font-medium text-center mb-2">{title}</h3>
      <p className="text-neutral-600 text-center text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Gift size={24} />,
      title: "Exclusive Gift",
      description: "Adipiscing Nostra Per Porttitor Tellus Tellus Lectus Cursus Inceptos.",
    },
    {
      icon: <Percent size={24} />,
      title: "Seasonal Discounts",
      description: "Conubia Turpis Amet Laoreet Faucibus Aenean Consectetur Pulvinar Metus.",
    },
    {
      icon: <Truck size={24} />,
      title: "Free Delivery",
      description: "Turpis Ac Per Magnis Sagittis Consectetur Orci Imperdiet Pulvinar.",
    },
    {
      icon: <DollarSign size={24} className="mr-1" />,
      title: "Budget-Friendly",
      description: "Placerat Mattis Class Lacinia Fusce Taciti Integer Consequat Mollis.",
    },
  ]

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  )
}

