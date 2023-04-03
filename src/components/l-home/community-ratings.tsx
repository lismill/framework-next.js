import {Avatar, Link, Carousel, Comment, Rate, Tag} from "@arco-design/web-react";
import {IconHeartFill} from "@arco-design/web-react/icon";
import React from "react";

const HomeCommunityRatings: React.FC = () => {
  return (
    <div className="why-choose-us bg-white">
      <div className="w-[1280px] m-auto">
        <h3 className="title pt-[48px]">
          <div>
            Community ratings{" "}
            <p className="desc">
              Stars On Average out of 5(1,000+ Ratings): <span className="text-[#c32200]">4.8</span>
            </p>
          </div>
          <div className="more">
            <Tag color="#c32200">SEE ALL</Tag>
          </div>
        </h3>
        <div className="flex justify-between flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <div
                key={item}
                className="w-[302px] p-[24px] mb-[24px] rounded-[6px] bg-[#f5f6f7] border-indigo-600 cursor-pointer transition hover:translate-y-[-4px]"
              >
                <Comment
                  author="Socrates"
                  align="right"
                  avatar={<Avatar size={46}>Arco</Avatar>}
                  actions={[
                    <div key="heart">
                      <IconHeartFill style={{color: "#c32200"}} /> 688
                    </div>,
                  ]}
                  content={
                    <div>
                      <Rate defaultValue={5} readonly className="scale-[0.65] origin-left" />
                      <div className="break-all">Delivery was super fast and easy will definitely be using...</div>
                    </div>
                  }
                  datetime="2022-12-12"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCommunityRatings;
