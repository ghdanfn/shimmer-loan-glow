
import { 
  ShieldCheck, 
  Clock, 
  Wallet, 
  DollarSign, 
  FileText, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "تایید سریع",
    description: "با فرآیند درخواست ساده‌ی ما، در عرض چند دقیقه وام خود را تایید کنید."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "امن و مطمئن",
    description: "اطلاعات شخصی شما با رمزگذاری و پروتکل‌های امنیتی در سطح نظامی محافظت می‌شود."
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "نرخ‌های رقابتی",
    description: "به بهترین نرخ‌های وام از شبکه‌ای از وام‌دهندگان و موسسات مالی معتبر دسترسی پیدا کنید."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "شرایط انعطاف‌پذیر",
    description: "شرایط وام و برنامه بازپرداخت خود را مطابق با وضعیت مالی خود سفارشی کنید."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "فرآیند شفاف",
    description: "بدون هزینه‌های پنهان. ما به شفافیت کامل در تمام مراحل فرآیند وام اعتقاد داریم."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "بهبود اعتبار",
    description: "با پرداخت‌های به موقع وام که به دفاتر اعتباری اصلی گزارش می‌شود، امتیاز اعتباری خود را بهبود دهید."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">چرا لندو را انتخاب کنیم</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ما تجربه وام بدون دردسر و آسان با مزایایی طراحی شده برای رفع نیازهای مالی شما را فراهم می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-100 bg-white shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
