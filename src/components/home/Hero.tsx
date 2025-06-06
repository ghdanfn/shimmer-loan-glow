
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [loanType, setLoanType] = useState("personal");
  const navigate = useNavigate();

  const interestRates = {
    personal: 0.089, // 8.9%
    business: 0.079, // 7.9%
    education: 0.059, // 5.9%
  };

  const calculateMonthlyPayment = () => {
    const rate = interestRates[loanType as keyof typeof interestRates] / 12;
    const term = loanTerm;
    const principal = loanAmount;
    
    const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    return payment.toFixed(2);
  };
  
  const handleLoanRequest = () => {
    console.log("Requesting loan:", {
      amount: loanAmount,
      term: loanTerm,
      type: loanType,
      monthlyPayment: calculateMonthlyPayment()
    });
    
    navigate("/loan-request");
    toast({
      title: "درخواست وام",
      description: "به صفحه درخواست وام منتقل شدید",
      variant: "default",
    });
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 card-hover">
      <h3 className="text-xl font-semibold mb-6 text-center">محاسبه گر وام</h3>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">نوع وام</span>
        </div>
        <div className="flex space-x-2 mb-6">
          {Object.keys(interestRates).map((type) => (
            <button
              key={type}
              onClick={() => setLoanType(type)}
              className={cn(
                "flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors",
                loanType === type
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {type === "personal" ? "شخصی" : type === "business" ? "تجاری" : "تحصیلی"}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Loan Amount Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">مبلغ وام</span>
            <span className="text-sm font-semibold">{loanAmount.toLocaleString()} تومان</span>
          </div>
          <Slider
            defaultValue={[loanAmount]}
            max={50000}
            min={1000}
            step={1000}
            onValueChange={(value) => setLoanAmount(value[0])}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>۱,۰۰۰ تومان</span>
            <span>۵۰,۰۰۰ تومان</span>
          </div>
        </div>

        {/* Loan Term Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">مدت وام</span>
            <span className="text-sm font-semibold">{loanTerm} ماه</span>
          </div>
          <Slider
            defaultValue={[loanTerm]}
            max={60}
            min={3}
            step={3}
            onValueChange={(value) => setLoanTerm(value[0])}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>۳ ماه</span>
            <span>۶۰ ماه</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">پرداخت ماهانه</p>
            <p className="text-xl font-semibold text-primary">{monthlyPayment} تومان</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">نرخ سود</p>
            <p className="text-xl font-semibold text-secondary">
              {(interestRates[loanType as keyof typeof interestRates] * 100).toFixed(1)}٪
            </p>
          </div>
        </div>
      </div>

      <Button 
        className="w-full mt-6 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
        onClick={handleLoanRequest}
      >
        درخواست وام
      </Button>
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  
  const handleStartClick = () => {
    navigate("/loan-request");
    toast({
      title: "شروع درخواست وام",
      description: "به صفحه درخواست وام منتقل شدید",
      variant: "default",
    });
    console.log("Start button clicked");
  };
  
  const handleMoreInfoClick = () => {
    navigate("/all-loans");
    toast({
      title: "اطلاعات بیشتر",
      description: "به صفحه اطلاعات بیشتر منتقل شدید",
      variant: "default",
    });
    console.log("More info button clicked");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">وام هوشمند</span> برای نیازهای مالی شما
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              وجوه مورد نیاز خود را با نرخ های رقابتی و شرایط انعطاف پذیر دریافت کنید.
              به صورت آنلاین درخواست دهید و تصمیمات تأیید سریع دریافت کنید.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button 
                onClick={handleStartClick}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                شروع کنید
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleMoreInfoClick}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-medium py-6 px-8 text-lg transition-all"
              >
                اطلاعات بیشتر
              </Button>
            </div>
          </div>
          
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <LoanCalculator />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
