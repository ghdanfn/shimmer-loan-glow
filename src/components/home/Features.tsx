
import { 
  ShieldCheck, 
  Clock, 
  Wallet, 
  DollarSign, 
  FileText, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Quick Approval",
    description: "Get approved for your loan in minutes with our streamlined application process."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Safe & Secure",
    description: "Your personal information is protected with military-grade encryption and security protocols."
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Competitive Rates",
    description: "Access the best loan rates from our network of trusted lenders and financial institutions."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Flexible Terms",
    description: "Customize your loan terms and repayment schedule to fit your financial situation."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Transparent Process",
    description: "No hidden fees or charges. We believe in complete transparency throughout the loan process."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Build Credit",
    description: "Improve your credit score with timely loan repayments reported to major credit bureaus."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LoanEase</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a seamless and hassle-free loan experience with benefits designed to meet your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-100 bg-white shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
