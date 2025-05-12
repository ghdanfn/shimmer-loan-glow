
import { Button } from "@/components/ui/button";
import {
  FormInput,
  CheckCircle2,
  DollarSign,
  Sparkles
} from "lucide-react";

const steps = [
  {
    icon: <FormInput className="h-12 w-12 text-primary" />,
    title: "Complete Application",
    description: "Fill out our simple online application in just a few minutes."
  },
  {
    icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
    title: "Get Approval",
    description: "Receive a quick decision after our automated review process."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    title: "Receive Funds",
    description: "Once approved, get funds directly deposited to your account."
  },
  {
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: "Enjoy Benefits",
    description: "Take advantage of competitive rates and flexible repayment terms."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our simple four-step process makes getting a loan quick and hassle-free.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl shadow-soft p-6 text-center">
                  <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="inline-block w-8 h-8 rounded-full bg-primary text-white text-sm leading-8 mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Ready to get started with your loan application?</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
