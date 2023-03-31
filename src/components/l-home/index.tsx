import Framework from "../../components/framework";
import LContent from "../../components/l-content";
import React from "react";
import HomeHotGames from "./hot-games";
import HomeWhyChooseMe from "./why-choose-us";

const LHome: React.FC = () => {
  return (
    <Framework title="Home | Create Next App" description="Home | Generated by create next app">
      <LContent top="banner">
        <HomeHotGames />
        <HomeWhyChooseMe />
        <h3 className="title">
          <div>Game News</div>
        </h3>
        <h3 className="title">
          <div>
            Community ratings <p className="desc">More than 1,000,000 customer reviews on Z2U</p>
          </div>
        </h3>
        <h3 className="title">
          <div>Company INTRODUCTION</div>
        </h3>
        <h3 className="title">
          <div>Method Of Payment</div>
        </h3>
      </LContent>
    </Framework>
  );
};

export default LHome;