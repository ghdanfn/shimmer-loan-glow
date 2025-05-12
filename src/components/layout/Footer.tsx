
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-primary">لـن</span>
              <span className="text-secondary">تک</span>
            </h3>
            <p className="text-gray-300 mb-6">
              ارائه وام‌های قابل دسترسی برای همه با شرایط شفاف و نرخ‌های رقابتی.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">فیسبوک</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">توییتر</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">اینستاگرام</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">محصولات وام</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">نحوه کار</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">وبلاگ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="ml-2 text-primary" />
                <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="ml-2 text-primary" />
                <a href="mailto:info@lentak.ir" className="text-gray-300 hover:text-primary">info@lentak.ir</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خبرنامه</h3>
            <p className="text-gray-300 mb-4">
              برای دریافت آخرین اخبار و پیشنهادات در خبرنامه ما عضو شوید.
            </p>
            <div className="flex flex-row-reverse space-x-reverse space-x-2">
              <Button className="bg-primary hover:bg-primary/90 shadow-md">
                عضویت
              </Button>
              <Input 
                type="email" 
                placeholder="ایمیل شما" 
                className="bg-gray-800 border-gray-700 text-white focus:border-primary input-focus"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} لن تک. تمامی حقوق محفوظ است.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">سیاست حریم خصوصی</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
