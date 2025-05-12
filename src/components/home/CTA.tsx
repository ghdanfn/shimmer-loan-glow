
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const navigate = useNavigate();

  const handleLoanRequest = () => {
    navigate("#loan-request");
    toast({
      title: "درخواست وام",
      description: "فرم درخواست وام با موفقیت باز شد",
      variant: "default",
    });
    console.log("Loan request button clicked");
  };

  const handleContactUs = () => {
    navigate("#contact");
    toast({
      title: "تماس با ما",
      description: "به صفحه تماس با ما منتقل شدید",
      variant: "default",
    });
    console.log("Contact us button clicked");
  };

  return (
    <section className="py-20 modern-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            آماده شروع هستید؟
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            اولین قدم را به سوی اهداف مالی خود با لن تک بردارید. 
            فرآیند درخواست ساده و نرخ‌های رقابتی ما، وام گرفتن را آسان می‌کند.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-7 text-lg shadow-lg hover:shadow-xl transition-all button-modern hover-scale"
              onClick={handleLoanRequest}
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              درخواست اکنون
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-7 text-lg transition-all button-modern"
              onClick={handleContactUs}
            >
              اطلاعات بیشتر
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/80">
            بدون هیچ تعهدی. نرخ خود را بدون تأثیر بر امتیاز اعتباری‌تان بررسی کنید.
          </p>
        </div>
      </div>
      
      {/* Modern design elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
