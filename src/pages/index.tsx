import Framework from "../components/framework";
import LContent from "../components/l-content";
import React from "react";
import {Button} from "@arco-design/web-react";

const Home: React.FC = () => {
  return (
    <Framework title="Home | Create Next App" description="Home | Generated by create next app">
      <LContent top="swiper">
        <div className="h-[600px]">Home</div>
      </LContent>
    </Framework>
  );
};

export default Home;