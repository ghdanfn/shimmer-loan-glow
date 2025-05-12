
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  GraduationCap,
  Car,
  CreditCard,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";

const loanTypes = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "وام مسکن",
    description: "نرخ های رقابتی وام مسکن برای خانه رویایی شما",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    details: "با نرخ بهره ۱۸٪ سالانه و بازپرداخت تا ۲۰ سال",
    requirements: ["سند ملکی", "گواهی اشتغال به کار", "ضامن معتبر"],
    maxAmount: "۵۰۰ میلیون تومان"
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "وام تجاری",
    description: "سرمایه برای کمک به رشد و موفقیت کسب و کار شما",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    details: "با نرخ بهره ۲۰٪ سالانه و بازپرداخت تا ۵ سال",
    requirements: ["طرح کسب و کار", "مدارک ثبت شرکت", "صورت‌های مالی"],
    maxAmount: "۱ میلیارد تومان"
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "وام تحصیلی",
    description: "تامین مالی تحصیلات خود با گزینه های بازپرداخت انعطاف پذیر",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    details: "با نرخ بهره ۱۲٪ سالانه و بازپرداخت پس از فارغ‌التحصیلی",
    requirements: ["مدارک دانشجویی", "مدارک هویتی", "ضامن معتبر"],
    maxAmount: "۵۰ میلیون تومان"
  },
  {
    icon: <Car className="h-10 w-10" />,
    title: "وام خودرو",
    description: "با تامین مالی مقرون به صرفه خودرو در جاده قرار بگیرید",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    details: "با نرخ بهره ۱۶٪ سالانه و بازپرداخت تا ۵ سال",
    requirements: ["پیش‌پرداخت ۳۰٪", "مدارک هویتی", "ضامن معتبر"],
    maxAmount: "۳۰۰ میلیون تومان"
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "وام شخصی",
    description: "تامین مالی انعطاف پذیر برای نیازهای شخصی شما",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    details: "با نرخ بهره ۲۲٪ سالانه و بازپرداخت تا ۳ سال",
    requirements: ["گواهی اشتغال به کار", "مدارک هویتی", "ضامن معتبر"],
    maxAmount: "۱۰۰ میلیون تومان"
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "سرمایه گذاری املاک",
    description: "تامین مالی برای املاک سرمایه گذاری شما",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500",
    details: "با نرخ بهره ۱۹٪ سالانه و بازپرداخت تا ۱۵ سال",
    requirements: ["سند ملکی", "برنامه سرمایه‌گذاری", "ضامن معتبر"],
    maxAmount: "۸۰۰ میلیون تومان"
  }
];

const AllLoans = () => {
  const navigate = useNavigate();

  const handleLoanRequest = (loanType: string) => {
    navigate("/loan-request");
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">تمام گزینه‌های وام</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                ما طیف گسترده‌ای از محصولات وام را با نرخ‌های رقابتی ارائه می‌دهیم. وامی که متناسب با نیازهای شما باشد را انتخاب کنید.
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
                    <p className="text-gray-600 mb-4">{loan.description}</p>
                    <div className="mb-5 p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">{loan.details}</p>
                      <p className="text-sm text-gray-600 mb-1">شرایط اصلی:</p>
                      <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
                        {loan.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-primary">سقف وام: {loan.maxAmount}</p>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white button-modern"
                      onClick={() => handleLoanRequest(loan.title)}
                    >
                      درخواست وام
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllLoans;
