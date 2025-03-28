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
      question: " Do you offer Cash on Delivery (COD)?",
      answer:
        "No, we do not offer Cash on Delivery (COD). All orders must be prepaid using our available payment options.",
    },
    {
      question: "What is the estimated delivery time for orders?",
      answer:
        "Our standard delivery time is 5 to 10 days, depending on your location. Once your order is shipped, you will receive a tracking link via email or WhatsApp.",
    },
    {
      question: "What is your return or replacement policy?",
      answer:
        "We have a dedicated section for our Return & Replacement Policy. Please refer to it for complete details. A packaging video is mandatory for any return or replacement request.",
    },
    {
      question: "Will the jewelry lose its color over time?",
      answer:
        "Our jewelry is designed to be long-lasting, and the color does not fade easily. However, its lifespan depends on factors like body heat, exposure to chemicals (perfume, hair spray, moisture), climate, and storage. Proper care, as outlined in our Care & Maintenance Section, will help maintain its shine.",
    },
    {
      question: "Can I cancel my order after placing it?",
      answer:
        "No, cancellations are not allowed once the order is placed. Please review your order carefully before confirming the purchase.",
    },
    {
      question: "Will the product be exactly the same as shown in the photos?",
      answer:"Yes, the product will be similar to the images displayed, but minor variations may occur due to lighting, camera angles, or manufacturing differences. No exchange or return will be provided for small or minute differences."
    },
    {
      question: "How can I track my parcel?",
      answer: "Once your order is dispatched, we will send you a confirmation email or WhatsApp message with a tracking ID, which you can use to track your shipment."
    },
    {
      question: "What materials are used in the jewelry?",
      answer: "Our jewelry is crafted from brass/steel/alloy/copper/iron and coated with matte or imitation gold plating. It does not contain one-gram gold, real gold, or real silver."
    }
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

        <button className="bg-[#A63C15] text-white px-6 py-3 flex items-center rounded-sm hover:bg-[#4e341b] transition-colors font-bold">
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

