import React from "react";
import Image from "next/image";
import Pay1 from "../../../public/images/home/pay-1.png";
import Pay2 from "../../../public/images/home/pay-2.png";
import Pay3 from "../../../public/images/home/pay-3.png";
import Pay4 from "../../../public/images/home/pay-4.png";

const HomeMethodOfPayment: React.FC = () => {
  return (
    <div className=" w-[640px] method-of-payment">
      <h3 className="title">
        <div>Method Of Payment</div>
      </h3>
      <ul className="flex flex-wrap justify-between">
        {[
          {name: "Pay1", src: Pay1},
          {name: "Pay2", src: Pay2},
          {name: "Pay3", src: Pay3},
          {name: "Pay4", src: Pay4},
        ].map((item) => {
          return (
            <li key={item.name} className="opacity-[0.85] hover:opacity-[1] cursor-pointer">
              <Image src={item.src} width={120} quality={100} alt={item.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeMethodOfPayment;
