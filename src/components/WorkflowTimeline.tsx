
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
}

interface WorkflowTimelineProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export const WorkflowTimeline = ({ 
  steps, 
  title = "Notre processus de travail",
  subtitle = "Une méthode éprouvée pour des résultats exceptionnels"
}: WorkflowTimelineProps) => {
  return (
    <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">{title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left`}>
                  <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light mb-4 text-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>
                </div>

                {/* Center icon */}
                <div className="relative flex-shrink-0 order-first lg:order-none">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100 relative z-10">
                    <div className="text-blue-600 scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Arrow for next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <p className="text-lg text-gray-700 font-light">
            Prêt à commencer votre projet ?
          </p>
        </div>
      </div>
    </section>
  );
};
