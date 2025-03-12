import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border rounded-sm mb-4 ${isOpen ? "border-amber-200" : "border-amber-100 bg-amber-50/70"}`}>
      <button
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg">{question}</span>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-neutral-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqData = [
    {
      question: "How Can I Tell If My Jewelry Is Real Or Fake?",
      answer:
        "Penatibus Massa Ullamcorper Facilisis Sociosqu Pharetra Suspendisse Ante Tempus Facilisi. Vestibulum Tellus Erat Porttitor Fusce Rutrum Vehicula. Cubilia Nulla Mi Nulla. Purus Parturient Sit Nostra Elementum. Ex Dignissim Praesent Congue Platea Justo Sit. Eu Fames Tristique Convallis Fusce Eros Tristique. Magna Torquent Tempus Rhoncus Rutrum Pharetra Maximus.",
    },
    {
      question: "What Is The Difference Between A Gemstone And A Diamond?",
      answer:
        "Diamonds are a specific type of gemstone made of carbon. Other gemstones like emeralds, rubies, and sapphires have different chemical compositions and properties. Diamonds are known for their exceptional hardness and brilliance, while other gemstones offer a variety of colors and characteristics.",
    },
    {
      question: "How Do I Find My Ring Size?",
      answer:
        "You can find your ring size by visiting a jeweler for professional sizing, using a printable ring sizer, measuring with string or paper, or ordering a ring sizing kit online. For accuracy, measure when your fingers are at normal temperature and take multiple measurements at different times of day.",
    },
    {
      question: "What Is The Difference Between Sterling Silver And Fine Silver?",
      answer:
        "Sterling silver contains 92.5% silver and 7.5% other metals (usually copper), making it more durable for everyday wear. Fine silver is 99.9% pure silver, which is softer and more prone to scratches and dents. Sterling silver is marked with '925' while fine silver is marked '999'.",
    },
    {
      question: "Can I Resize My Ring If It Doesn't Fit?",
      answer:
        "Most rings can be resized by a professional jeweler. Simple bands are easier to resize than complex designs with stones all around. Typically, rings can be resized up to two sizes larger or smaller. Some materials like titanium, tungsten, and stainless steel are difficult or impossible to resize.",
    },
  ]

  const workingHours = [
    { day: "Monday To Friday", hours: "08:00am To 08:00pm" },
    { day: "Saturday", hours: "08:00am To 02:00pm" },
    { day: "Sunday", hours: "Holiday" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <h2 className="text-3xl font-bold mb-4">Frequently Asking Questions</h2>
        <p className="text-neutral-600 mb-8">
          Felis praesent bibendum potenti vivamus tortor sollicitudin. Dapibus vel ac tincidunt lacinia ac leo sociosqu.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Working Hours</h3>
          <ul className="space-y-3">
            {workingHours.map((item, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="font-medium">
                  {item.day} - {item.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-teal-900 text-white px-6 py-3 flex items-center rounded-sm hover:bg-teal-800 transition-colors">
          Submit A Query
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      <div className="lg:col-span-8">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  )
}

