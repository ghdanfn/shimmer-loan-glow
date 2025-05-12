
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "شرایط لازم برای درخواست وام چیست؟",
    answer:
      "برای درخواست وام در لندو، باید حداقل ۱۸ سال سن داشته باشید، کارت شناسایی معتبر دولتی، مدرک درآمد و یک حساب جاری داشته باشید. شرایط خاص ممکن است بسته به نوع و مقدار وامی که درخواست می‌کنید متفاوت باشد.",
  },
  {
    question: "مدت زمان فرآیند درخواست چقدر است؟",
    answer:
      "درخواست آنلاین ما معمولاً فقط ۵ تا ۱۰ دقیقه طول می‌کشد. پس از ارسال، ممکن است در عرض چند دقیقه تصمیم اولیه را دریافت کنید. پس از تایید، وجوه می‌تواند در عرض ۲۴ ساعت تا چند روز کاری به حساب شما واریز شود، بسته به نوع وام.",
  },
  {
    question: "چه نرخ‌های بهره‌ای ارائه می‌دهید؟",
    answer:
      "نرخ‌های بهره بر اساس چندین عامل از جمله امتیاز اعتباری شما، مبلغ وام، مدت زمان وام و نوع وام متفاوت است. نرخ‌های ما رقابتی هستند و برای وام‌گیرندگان واجد شرایط از APR ۵.۹٪ شروع می‌شود. می‌توانید از ماشین حساب وام ما برای دریافت تخمین بر اساس وضعیت خاص خود استفاده کنید.",
  },
  {
    question: "آیا با اعتبار ضعیف می‌توانم درخواست دهم؟",
    answer:
      "بله، ما با وام‌دهندگانی کار می‌کنیم که در شرایط اعتباری مختلف تخصص دارند. در حالی که داشتن امتیاز اعتباری خوب به شما کمک می‌کند تا برای نرخ‌های بهتر واجد شرایط شوید، ما گزینه‌هایی برای وام‌گیرندگان با اعتبار کمتر از عالی داریم. ما هنگام ارزیابی درخواست‌ها، عوامل متعددی فراتر از امتیاز اعتباری شما را در نظر می‌گیریم.",
  },
  {
    question: "آیا هزینه‌ای برای درخواست وجود دارد؟",
    answer:
      "هیچ هزینه‌ای برای درخواست وام از طریق لندو وجود ندارد. خدمات ما کاملاً رایگان است. برخی وام‌ها ممکن است شامل هزینه‌های پردازش یا سایر هزینه‌ها از طرف وام‌دهنده باشد، اما این موارد قبل از اینکه هر پیشنهاد وامی را قبول کنید، به وضوح افشا می‌شود.",
  },
  {
    question: "چگونه اقساط وام خود را پرداخت کنم؟",
    answer:
      "اکثر وام‌ها پرداخت‌های خودکاری را ارائه می‌دهند که در تاریخ مقرر از حساب بانکی شما کسر می‌شود. همچنین می‌توانید از طریق پورتال وام‌دهنده خود پرداخت‌های دستی آنلاین انجام دهید. گزینه‌ها و روش‌های پرداخت پس از نهایی شدن وام شما ارائه خواهد شد.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            سوالات متداول
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            پاسخ سوالات رایج درباره خدمات وام ما را پیدا کنید.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-right">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            سوال شما اینجا نیست؟ با تیم پشتیبانی ما تماس بگیرید.
          </p>
          <a
            href="#contact"
            className="text-primary hover:underline font-medium"
          >
            تماس با ما
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
