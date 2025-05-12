
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Take the first step towards your financial goals with LoanEase. 
            Our simple application process and competitive rates make borrowing easy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 text-lg">
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            No obligations. Check your rate without affecting your credit score.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
