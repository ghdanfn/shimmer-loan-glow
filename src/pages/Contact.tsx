import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "پیام شما دریافت شد",
      description: "کارشناسان ما به زودی به پیام شما پاسخ خواهند داد",
      variant: "default"
    });
  };
  return <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">تماس با ما</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                سوالی دارید؟ تیم پشتیبانی ما آماده پاسخگویی به تمامی سوالات شما است.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <div className="glass-card p-8 hover-scale">
                <h2 className="text-2xl font-semibold mb-6">ارسال پیام</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">نام و نام خانوادگی</label>
                      <Input id="name" className="input-focus" placeholder="نام و نام خانوادگی" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">ایمیل</label>
                      <Input id="email" type="email" className="input-focus" placeholder="ایمیل" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">موضوع</label>
                    <Input id="subject" className="input-focus" placeholder="موضوع پیام" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">پیام</label>
                    <Textarea id="message" className="input-focus min-h-32" placeholder="پیام خود را بنویسید..." required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg shadow-md hover:shadow-lg transition-all">
                    ارسال پیام
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass-card p-8 hover-scale">
                  <h2 className="text-2xl font-semibold mb-6">اطلاعات تماس</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">تلفن تماس</h3>
                        <p className="text-gray-600 mt-1">۰۲۱-۱۲۳۴۵۶۷۸</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">ایمیل</h3>
                        <p className="text-gray-600 mt-1">info@lentech.ir</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">آدرس</h3>
                        <p className="text-gray-600 mt-1">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">ساعات کاری</h3>
                        <p className="text-gray-600 mt-1">شنبه تا چهارشنبه: ۹ صبح تا ۵ بعد از ظهر</p>
                        <p className="text-gray-600">
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;