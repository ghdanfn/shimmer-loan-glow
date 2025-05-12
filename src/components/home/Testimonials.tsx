
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
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "LoanEase made securing a business loan incredibly simple. Their rates were competitive and the process was transparent from start to finish. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "First-time Home Buyer",
    content: "As a first-time home buyer, I was nervous about the mortgage process. The team at LoanEase guided me through every step and helped me find a great rate. I'm now a proud homeowner!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Jessica Williams",
    role: "College Student",
    content: "Finding an education loan with favorable terms seemed impossible until I discovered LoanEase. Their application was easy and I got approved within days. Now I can focus on my studies!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Rodriguez",
    role: "Auto Enthusiast",
    content: "After being turned down by my bank for an auto loan, LoanEase connected me with lenders who understood my situation. The rates were better than expected and I drove off in my dream car.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what customers have to say about their LoanEase experience.
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
                          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
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
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white border border-gray-200 shadow-sm"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white border border-gray-200 shadow-sm"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
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
