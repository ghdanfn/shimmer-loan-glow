
import {
  Home,
  Briefcase,
  GraduationCap,
  Car,
  CreditCard,
  Building,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const loanTypes = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "وام مسکن",
    description: "نرخ های رقابتی وام مسکن برای خانه رویایی شما",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "وام تجاری",
    description: "سرمایه برای کمک به رشد و موفقیت کسب و کار شما",
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "وام تحصیلی",
    description: "تامین مالی تحصیلات خود با گزینه های بازپرداخت انعطاف پذیر",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: <Car className="h-10 w-10" />,
    title: "وام خودرو",
    description: "با تامین مالی مقرون به صرفه خودرو در جاده قرار بگیرید",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500"
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "وام شخصی",
    description: "تامین مالی انعطاف پذیر برای نیازهای شخصی شما",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500"
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "سرمایه گذاری املاک",
    description: "تامین مالی برای املاک سرمایه گذاری شما",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500"
  }
];

const LoanTypes = () => {
  const navigate = useNavigate();

  const handleViewAllLoans = () => {
    navigate("/all-loans");
    toast({
      title: "گزینه‌های وام",
      description: "در حال مشاهده تمام گزینه‌های وام هستید",
      variant: "default",
    });
    console.log("View all loans button clicked");
  };

  const handleLoanInfoClick = (loanType: string) => {
    navigate(`/loan-request`);
    toast({
      title: `اطلاعات ${loanType}`,
      description: `در حال مشاهده اطلاعات ${loanType} هستید`,
      variant: "default",
    });
    console.log(`More info button clicked for ${loanType}`);
  };

  return (
    <section id="loan-types" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">محصولات وام</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ما انواع مختلفی از محصولات وام را ارائه می‌دهیم که مطابق با نیازهای مالی خاص شما طراحی شده‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden transition-all hover:shadow-xl hover-scale"
            >
              <div className={cn("p-6", loan.bgColor)}>
                <div className={cn("mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md", loan.iconColor)}>
                  {loan.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white button-modern"
                  onClick={() => handleLoanInfoClick(loan.title)}
                >
                  اطلاعات بیشتر
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all button-modern"
            onClick={handleViewAllLoans}
          >
            مشاهده تمام گزینه‌های وام
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
