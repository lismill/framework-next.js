import {Button, Space, Tag} from "@arco-design/web-react";
import Image from "next/image";
import Game1 from "../../../public/images/home/1.jpg";
import Game2 from "../../../public/images/home/2.jpg";
import Game3 from "../../../public/images/home/3.jpg";
import Game4 from "../../../public/images/home/4.jpg";
import React from "react";

const HomeHotGames: React.FC = () => {
  return (
    <div className="hot-games">
      <h3 className="title">
        <div>
          Hot Games
          <p className="desc">The best starting point to discover hot games Want to play Hot Games?</p>
        </div>
        <p className="more">
          <Tag color="#c32200">SEE ALL</Tag>
        </p>
      </h3>
      <Space size={24} className="flex-wrap">
        {[
          {name: "Dofus", image: Game1},
          {name: "The Elder Scroll Online", image: Game2},
          {name: "World of Warcraft", image: Game3},
          {name: "WoW WotLK", image: Game4},
        ].map((item) => {
          return (
            <div
              key={item.name}
              className="w-[302px] rounded-[6px] bg-white transition cursor-pointer hover:translate-y-[-4px] hover:font-[500] hover:text-[#c32200]"
            >
              <Image
                className="rounded-t-[6px] opacity-[0.9] hover:opacity-[1]"
                src={item.image}
                width={302}
                alt={item.name}
              />
              <p className="px-[16px] py-[12px] text-[15px]">{item.name}</p>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export default HomeHotGames;
