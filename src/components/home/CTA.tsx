
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleLoanRequest = () => {
    // In a real application, this would navigate to a loan request page
    navigate("#loan-request");
    console.log("Loan request button clicked");
  };

  const handleContactUs = () => {
    // In a real application, this would navigate to a contact page
    navigate("#contact");
    console.log("Contact us button clicked");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع هستید؟</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            اولین قدم را به سوی اهداف مالی خود با لن تک بردارید. 
            فرآیند درخواست ساده و نرخ‌های رقابتی ما، وام گرفتن را آسان می‌کند.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={handleLoanRequest}
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              درخواست اکنون
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 text-lg transition-all"
              onClick={handleContactUs}
            >
              تماس با ما
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            بدون هیچ تعهدی. نرخ خود را بدون تأثیر بر امتیاز اعتباری‌تان بررسی کنید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
