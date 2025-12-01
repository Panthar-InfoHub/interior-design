"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How will I receive the eBook?",
    answer:
      "After your purchase is complete, you'll receive an instant download link via email. You can also access the download directly from the confirmation page. The eBook comes in PDF format for easy viewing on any device.",
  },
  {
    question: "Can I read it on any device?",
    answer:
      "Yes! The eBook is delivered as a PDF file, which can be opened on smartphones, tablets, laptops, and desktop computers. You can read it on iOS, Android, Windows, Mac, or any device with a PDF reader.",
  },
  {
    question: "Is this beginner-friendly?",
    answer:
      "This guide was specifically designed for beginners and homeowners with no prior design experience. Everything is explained in simple, easy-to-understand language with plenty of visual examples and step-by-step instructions.",
  },
  {
    question: "Do I need design software?",
    answer:
      "No design software is required! All the techniques and tips in this eBook can be applied without any special tools. For those interested, we do mention some free apps that can help with planning, but they're completely optional.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with the eBook within 30 days of purchase, simply contact us for a full refund — no questions asked.",
  },
  {
    question: "Will I receive future updates?",
    answer:
      "Yes! Once you purchase the eBook, you'll receive all future updates and additions at no extra cost. We regularly update the content to include new trends and techniques.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D91] mb-4">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-lg text-[#4a5568]">Everything you need to know before getting started</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F3F8FF] rounded-xl border border-[#E6F1FF] px-6 data-[state=open]:border-[#0A3D91] transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0A3D91] hover:no-underline py-5 [&[data-state=open]>svg]:text-[#0A3D91]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4a5568] pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
