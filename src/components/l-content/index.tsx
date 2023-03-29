import { Button } from "@nextui-org/react";

const LContent: React.FC<{
  top?: "swiper" | "banner" | undefined;
  children: any;
}> = ({ top, children }) => {
  return (
    <div className="l-content">
      {top === "swiper" && <div className="bg-gray-200 h-[430px]">swiper</div>}
      {top === "banner" && <div className="bg-gray-200 h-[260px]">banner</div>}
      <div className="w-[1280px] mx-auto">
        <Button>asd</Button>
        {children}
      </div>
    </div>
  );
};

export default LContent;
