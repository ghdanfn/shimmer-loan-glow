
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the requirements to apply for a loan?",
    answer:
      "To apply for a loan with LoanEase, you'll need to be at least 18 years old, have a valid government ID, proof of income, and a checking account. Specific requirements may vary depending on the loan type and amount you're requesting.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Our online application typically takes just 5-10 minutes to complete. After submission, you may receive an initial decision in as little as a few minutes. Once approved, funds can be deposited into your account within 24 hours to a few business days, depending on the loan type.",
  },
  {
    question: "What interest rates do you offer?",
    answer:
      "Interest rates vary based on several factors including your credit score, loan amount, term length, and the type of loan. Our rates are competitive and start as low as 5.9% APR for qualified borrowers. You can use our loan calculator to get an estimate based on your specific situation.",
  },
  {
    question: "Can I apply if I have bad credit?",
    answer:
      "Yes, we work with lenders who specialize in various credit situations. While having a good credit score helps you qualify for better rates, we have options for borrowers with less-than-perfect credit. We consider multiple factors beyond just your credit score when evaluating applications.",
  },
  {
    question: "Are there any fees for applying?",
    answer:
      "There are no fees to apply for a loan through LoanEase. Our service is completely free to use. Some loans may include origination fees or other charges from the lender, but these would be clearly disclosed before you accept any loan offer.",
  },
  {
    question: "How do I make payments on my loan?",
    answer:
      "Most loans offer automatic payments that are deducted from your bank account on the scheduled due date. You can also make manual payments online through your lender's portal. Payment options and methods will be provided once your loan is finalized.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about our loan services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Contact our support team.
          </p>
          <a
            href="#contact"
            className="text-primary hover:underline font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
