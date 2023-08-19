import React, { ReactNode } from "react";
import { Navbar } from "@/components";

interface LayoutDashboardProps {
  content?: "full" | "container";
  children: ReactNode;
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({
  content = "full",
  children,
}) => {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />

      {content === "full" ? (
        <div className="">{children}</div>
      ) : content === "container" ? (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      ) : (
        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
              {/* Left column area */}
            </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              {/* Main area */}
            </div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
            {/* Right column area */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutDashboard;
