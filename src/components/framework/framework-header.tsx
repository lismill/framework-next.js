import { Input, Navbar } from "@nextui-org/react";
import Image from "next/image";
import { HeaderIcons } from "./config";

export default function FrameworkHeader() {
  return (
    <div className="framework-header">
      <div className="w-1440 flex justify-between ">
        <div className="flex">
          <div className="logo">logo</div>
          <div className="nav ml-[128px]">
            <Navbar.Content>
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/develop">Develop</Navbar.Link>
            </Navbar.Content>
          </div>
          <div className="search ml-[32px]">
            <Input
              size="lg"
              width="390px"
              color="primary"
              placeholder="Search game..."
              bordered
              contentRight={<div>s</div>}
            />
          </div>
        </div>
        <div className="info flex">
          <div className="icon flex items-center">
            {HeaderIcons.map((item) => {
              return (
                <Image
                  key={item.alt}
                  className="ml-[16px] cursor-pointer"
                  width="22"
                  src={item.svg}
                  alt={item.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
