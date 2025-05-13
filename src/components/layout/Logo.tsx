
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg sm:text-xl">L</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
      </div>
      <div className="ml-2">
        <span className="text-xl sm:text-2xl font-bold">
          <span className="text-primary">لن</span>
          <span className="text-secondary">تک</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
