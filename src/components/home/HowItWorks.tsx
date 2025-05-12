
import { Button } from "@/components/ui/button";
import {
  FormInput,
  CheckCircle2,
  DollarSign,
  Sparkles
} from "lucide-react";

const steps = [
  {
    icon: <FormInput className="h-12 w-12 text-primary" />,
    title: "تکمیل درخواست",
    description: "درخواست آنلاین ساده ما را در چند دقیقه تکمیل کنید."
  },
  {
    icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
    title: "دریافت تایید",
    description: "پس از بررسی خودکار سیستم، سریعاً تصمیم نهایی را دریافت کنید."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    title: "دریافت وجه",
    description: "پس از تایید، وجوه مستقیماً به حساب شما واریز می‌شود."
  },
  {
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: "بهره‌مندی از مزایا",
    description: "از نرخ‌های رقابتی و شرایط بازپرداخت انعطاف‌پذیر بهره‌مند شوید."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نحوه کار</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            فرآیند چهار مرحله‌ای ساده ما، دریافت وام را سریع و بدون دردسر می‌کند.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl shadow-soft p-6 text-center">
                  <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="inline-block w-8 h-8 rounded-full bg-primary text-white text-sm leading-8 ml-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">آماده شروع درخواست وام خود هستید؟</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            درخواست وام
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
