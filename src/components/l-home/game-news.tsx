import {Tag} from "@arco-design/web-react";
import React from "react";

const HomeGamesNews: React.FC = () => {
  return (
    <div className="hot-games">
      <div className="w-[1280px] m-auto">
        <h3 className="title">
          <div>Games News</div>
          <div className="more">
            <Tag color="#c32200">SEE ALL</Tag>
          </div>
        </h3>
        <div className="flex flex-wrap gap-[24px]">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div
                key={item}
                className="w-[302px] bg-white p-[24px] hover:shadow-xl transition hover:translate-y-[-4px]"
              >
                <header>
                  <a className="break-all text-[17px] leading-[1.5] font-[600] transition hover:text-[#c32200] hover:cursor-pointer">
                    ​How to sell your Steam trading card on the Steam platform
                  </a>
                </header>
                <footer className="mt-[16px] text-[15px]">
                  <div className="desc break-all">
                    If you are a loyal Steam player, you will surely accumulate a lot of Steam cards on Steam.
                    Collecting Steam trading cards and combining them to increase your Steam Level will enable you to
                    obtain decorative badges for your Steam profile, and Get stickers that can be used in Steam chat.
                  </div>
                  <div className="mt-[16px] footer flex justify-between">
                    <p className="date">2023-04-03</p>
                    <p className="view">
                      <a className="text-[#c32200] hover:cursor-pointer">view</a>
                    </p>
                  </div>
                </footer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeGamesNews;
