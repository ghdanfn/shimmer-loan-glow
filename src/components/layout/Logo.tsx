
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
        <div className="w-full h-full">
          {/* Modern geometric logo design */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-primary rounded-md transform rotate-45"></div>
            <div className="absolute inset-[3px] bg-background rounded-md transform rotate-45"></div>
            <div className="absolute inset-0 w-1/2 h-1/2 m-auto bg-secondary rounded-sm transform rotate-45 shadow-sm"></div>
          </div>
        </div>
      </div>
      <div className="ml-3">
        <span className="text-xl sm:text-2xl font-bold">
          <span className="text-primary">لن</span>
          <span className="text-secondary">تک</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
