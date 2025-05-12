
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const LoanRequest = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "درخواست وام ثبت شد",
      description: "کارشناسان ما به زودی با شما تماس خواهند گرفت",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">درخواست وام</h1>
              <p className="text-gray-600 text-lg mb-8 text-center">
                برای دریافت وام، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
              </p>
              
              <div className="glass-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">نام</label>
                      <Input id="firstName" className="input-focus" placeholder="نام خود را وارد کنید" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">نام خانوادگی</label>
                      <Input id="lastName" className="input-focus" placeholder="نام خانوادگی خود را وارد کنید" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm font-medium">شماره تماس</label>
                    <Input id="phoneNumber" className="input-focus" placeholder="شماره تماس خود را وارد کنید" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="loanType" className="text-sm font-medium">نوع وام</label>
                    <select id="loanType" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="personal">وام شخصی</option>
                      <option value="business">وام تجاری</option>
                      <option value="home">وام مسکن</option>
                      <option value="car">وام خودرو</option>
                      <option value="education">وام تحصیلی</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="loanAmount" className="text-sm font-medium">مبلغ درخواستی (تومان)</label>
                    <Input id="loanAmount" type="number" className="input-focus" placeholder="مبلغ وام درخواستی را وارد کنید" required />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg shadow-md hover:shadow-lg transition-all">
                      ثبت درخواست
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      با ثبت درخواست، شما با قوانین و شرایط لن تک موافقت می‌کنید.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoanRequest;
