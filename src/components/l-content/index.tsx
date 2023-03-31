import {Breadcrumb, Carousel} from "@arco-design/web-react";
import {IconRight} from "@arco-design/web-react/icon";
const BreadcrumbItem = Breadcrumb.Item;
import Image from "next/image";
import banner from "../../../public/images/banner/0.png";
import banner1 from "../../../public/images/banner/0.png";
import banner2 from "../../../public/images/banner/0.png";
import styles from "./index.module.scss";

const LContent: React.FC<{
  top?: "banner" | "breadcrumb";
  breadcrumb?: string;
  children: any;
}> = ({top, breadcrumb, children}) => {
  return (
    <div className="l-content">
      {top === "banner" && (
        <Carousel
          autoPlay={true}
          indicatorType="line"
          showArrow="hover"
          arrowClassName={styles.arrow}
          indicatorClassName={styles.indicator}
          style={{height: 457}}
        >
          <div>{/* <Image src={banner1} alt=""></Image> */}</div>
          <div>{/* <Image src={banner2} alt=""></Image> */}</div>
        </Carousel>
      )}
      {top === "breadcrumb" && (
        <div className="w-[1280px] m-auto py-[16px] breadcrumb">
          <Breadcrumb separator={<IconRight />}>
            <BreadcrumbItem>
              <span className="iconfont icon-home text-[17px] relative left-[-4px]"></span>
              <span>Home</span>
            </BreadcrumbItem>
            <BreadcrumbItem>{breadcrumb}</BreadcrumbItem>
          </Breadcrumb>
        </div>
      )}
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default LContent;
