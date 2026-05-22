import React from "react";
import { Suspense } from "react";
import Available from "./Available";

const AvailableSection = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20 bg-black">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      }
    >
      <Available></Available>
    </Suspense>
  );
};

export default AvailableSection;
