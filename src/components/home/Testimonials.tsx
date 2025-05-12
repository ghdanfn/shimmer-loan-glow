
import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "سارا جعفری",
    role: "صاحب کسب و کار کوچک",
    content: "لندو دریافت وام تجاری را برای من بسیار ساده کرد. نرخ‌ها رقابتی بود و روند از ابتدا تا انتها شفاف بود. قویاً توصیه می‌کنم!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "محمد رضایی",
    role: "خریدار اولین خانه",
    content: "به عنوان خریدار اولین خانه، من در مورد فرآیند وام مسکن نگران بودم. تیم لندو من را در هر مرحله راهنمایی کرد و به من کمک کرد تا نرخ عالی پیدا کنم. اکنون من یک صاحب خانه افتخاری هستم!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "الهام محمدی",
    role: "دانشجو",
    content: "پیدا کردن وام تحصیلی با شرایط مناسب غیرممکن به نظر می‌رسید تا اینکه لندو را پیدا کردم. درخواست آنها آسان بود و در عرض چند روز تأیید شدم. حالا می‌توانم روی تحصیلاتم تمرکز کنم!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "داوود احمدی",
    role: "علاقمند به خودرو",
    content: "پس از رد شدن درخواست وام خودرو توسط بانکم، لندو من را به وام‌دهندگانی معرفی کرد که شرایط من را درک کردند. نرخ‌ها بهتر از حد انتظار بود و من با ماشین رویایی‌ام به خانه برگشتم.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نظرات مشتریان ما</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            فقط به حرف ما اعتماد نکنید. ببینید مشتریان در مورد تجربه خود با لندو چه می‌گویند.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-soft p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full overflow-hidden ml-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                              className={i < testimonial.rating ? "text-amber-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-lg italic text-gray-600">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button 
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white border border-gray-200 shadow-sm"
              onClick={prevTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white border border-gray-200 shadow-sm"
              onClick={nextTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
