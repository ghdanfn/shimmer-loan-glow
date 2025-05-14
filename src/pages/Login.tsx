
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would connect to an authentication service
    if (email && password) {
      toast({
        title: "ورود موفقیت‌آمیز",
        description: "شما با موفقیت وارد شدید",
        variant: "default",
      });
      navigate("/");
    } else {
      toast({
        title: "خطا",
        description: "لطفاً اطلاعات را کامل وارد کنید",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">ورود به حساب کاربری</CardTitle>
            <CardDescription>
              اطلاعات حساب خود را وارد کنید
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">ایمیل</label>
                <Input
                  id="email"
                  type="email" 
                  placeholder="ایمیل خود را وارد کنید"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-right"
                  dir="rtl"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">رمز عبور</label>
                <Input 
                  id="password"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-right"
                  dir="rtl"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-primary hover:underline">
                  فراموشی رمز عبور؟
                </a>
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm">مرا به خاطر بسپار</label>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-primary">
                ورود
              </Button>
              
              <div className="text-center text-sm">
                حساب کاربری ندارید؟{" "}
                <a 
                  href="/register" 
                  className="text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "ثبت نام",
                      description: "این قسمت در حال توسعه است",
                    });
                  }}
                >
                  ثبت نام کنید
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
