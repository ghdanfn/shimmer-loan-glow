
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "خطای ۴۰۴: کاربر تلاش کرد به مسیر غیرموجود دسترسی پیدا کند:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-primary/10">
            <FileQuestion className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">۴۰۴</h1>
          <p className="text-xl text-gray-600 mb-8">
            اوه! صفحه‌ای که به دنبال آن هستید وجود ندارد.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/" className="inline-flex items-center">
              <Home className="ml-2 h-5 w-5" />
              بازگشت به صفحه اصلی
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
