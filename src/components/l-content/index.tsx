import {Carousel} from "@arco-design/web-react";

const LContent: React.FC<{
  top?: "swiper" | "banner" | undefined;
  children: any;
}> = ({top, children}) => {
  return (
    <div className="l-content">
      {top === "swiper" && (
        <Carousel autoPlay={true} style={{height: 460}}>
          <div>111</div>
          <div>222</div>
        </Carousel>
      )}
      {top === "banner" && <div className="bg-gray-200 h-[260px]">banner</div>}
      <div className="w-[1280px] mx-auto">{children}</div>
    </div>
  );
};

export default LContent;
