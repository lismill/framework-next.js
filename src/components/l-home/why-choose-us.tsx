import {Space} from "@arco-design/web-react";
import React from "react";

const HomeWhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us">
      <h3 className="title">
        <div>Why Choose Us</div>
      </h3>
      <div
        className="p-[24px] bg-white rounded-[6px] flex justify-between flex-wrap"
        style={{boxShadow: "rgba(2, 1, 1, 0.08) 0px 5px 10px -5px"}}
      >
        {[
          {
            name: "99% Satisfaction",
            desc: "Had offered the game service since 2022. Satisfied with most customers.",
            icon: "icon-manyidu",
          },
          {
            name: "Security Gurantee",
            desc: "Provide the security of online payment, also the in-game information.",
            icon: "icon-baozhang",
          },
          {
            name: "Fast Delivery",
            desc: "More than 95% of orders are processed successfully in less than 15 minutes.",
            icon: "icon-sudu",
          },
          {
            name: "24*7 Online Chat",
            desc: "Live Chat offers 24*7 service, professional team provide the superior help.",
            icon: "icon-kefu",
          },
        ].map((item) => {
          return (
            <dl key={item.name} className="my-[24px] pl-[32px] w-[580px] flex items-center">
              <dt className="mr-[32px]">
                <span className={`text-[62px] text-[#c32200] iconfont ${item.icon}`}></span>
              </dt>
              <dd>
                <p className="name text-[24px] font-family-title">{item.name}</p>
                <p className="desc font-family-title text-[#8a8a8a]">{item.desc}</p>
              </dd>
            </dl>
          );
        })}
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
