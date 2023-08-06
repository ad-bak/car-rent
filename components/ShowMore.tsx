"use client";

import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());

    router.push(newPathName);
  };

  console.log("pageNumber", pageNumber);
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
