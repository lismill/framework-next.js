import {Icon, Space} from "@arco-design/web-react";
import React from "react";
const IconFont = Icon.addFromIconFontCn({
  src: "https://at.alicdn.com/t/c/font_3987391_5r3uhrmo7qo.js?spm=a313x.7781069.1998910419.76&file=font_3987391_5r3uhrmo7qo.js",
});

const HomeWhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us bg-white">
      <div className="w-[1280px] m-auto">
        <h3 className="title pt-[48px]">
          <div>Why Choose Us</div>
        </h3>
        <div className="pb-[24px] rounded-[6px] flex justify-between flex-wrap">
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
              <dl
                key={item.name}
                className="h-[108px] mt-[12px] mb-[24px] w-[580px] flex items-center hover:opacity-[.85]"
              >
                <dt className="mr-[32px]">
                  <IconFont type={item.icon} className="text-[62px] text-[#c32200]"></IconFont>
                </dt>
                <dd>
                  <p className="name text-[24px]">{item.name}</p>
                  <p className="desc text-[#8a8a8a]">{item.desc}</p>
                </dd>
              </dl>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
