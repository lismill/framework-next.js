import {Trigger} from "@arco-design/web-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/common/logo.png";

export default function FrameworkHeader() {
  return (
    <div className="framework-header">
      {/* header */}
      <div className="w-[1280px] mx-auto flex justify-between items-center header">
        <div className="flex">
          <div className="logo flex">
            logo
            {/* <Image src={logo} alt="logo" width={160}></Image> */}
          </div>
          <div className="ml-[64px] flex items-center search relative">
            <Trigger
              trigger="click"
              position="bl"
              popupAlign={{bottom: 26}}
              popup={() => <div className="w-[290px] h-[360px] bg-[#1a1a1c] p-[24px] text-[#ffffff]">currency</div>}
            >
              <input
                className="pl-[40px] pr-[16px] w-[390px] h-[40px] text-[#ffffff] text-[16px] bg-[#2e2e2e] rounded-[20px]"
                placeholder="Search Game"
                autoComplete="off"
                style={{border: "none"}}
              />
              <span className="iconfont icon-search absolute top-[8px] left-[16px] text-[16px] cursor-pointer"></span>
            </Trigger>
          </div>
        </div>
        <div className="info flex items-center">
          {/* icons */}
          <div className="icons flex items-center">
            <div className="flex items-center">
              <span
                className="iconfont icon-email ml-[22px] text-[14px] cursor-pointer relative top-[1px]"
                title="login/register"
              ></span>
            </div>
            <div className="flex items-center">
              <span
                className="iconfont icon-discoard ml-[22px] text-[17px] cursor-pointer"
                title="login/register"
              ></span>
            </div>
            <div className="flex items-center">
              <Trigger
                position="bottom"
                popupAlign={{bottom: 26}}
                popup={() => (
                  <div className="w-[140px] h-[360px] text-center bg-[#1a1a1c] p-[24px] text-[#ffffff]">currency</div>
                )}
              >
                <span
                  className="iconfont icon-meiyuan ml-[22px] text-[20px] cursor-pointer"
                  title="login/register"
                ></span>
              </Trigger>
            </div>
            <div className="flex items-center">
              <Trigger
                position="bottom"
                popupAlign={{bottom: 26}}
                popup={() => (
                  <div className="w-[140px] h-[360px] text-center bg-[#1a1a1c] p-[24px] text-[#ffffff]">language</div>
                )}
              >
                <span
                  className="iconfont icon-global1 ml-[22px] text-[22px] cursor-pointer relative top-[1px]"
                  title="login/register"
                ></span>
              </Trigger>
            </div>
            <div className="flex items-center cursor-pointer hover:text-[#ffffff]">
              <Trigger
                position="br"
                popupAlign={{bottom: 26}}
                popup={() => (
                  <div className="w-[360px]  h-[360px] bg-[#1a1a1c] p-[24px] text-[#ffffff]">login/registry</div>
                )}
              >
                <div className="flex items-center">
                  <span className="iconfont icon-user1 ml-[22px] text-[20px]" title="login/register"></span>
                  <span className="ml-[6px] text-[13px]">Sign in</span>
                </div>
              </Trigger>
            </div>
          </div>
        </div>
      </div>
      {/* nav */}
      <div className="h-[46px] nav ">
        <div className="w-[1280px] mx-auto flex items-center justify-between">
          {/* nav */}
          <ul>
            {["Home", "Games", "Help Center", "Member", "Reviews", "Contact Us", "About Us"].map((item) => {
              if (item === "Games") {
                return (
                  <Trigger
                    key="item"
                    position="bl"
                    popup={() => (
                      <div
                        className="w-[890px] h-[460px] bg-[#dfe0e1] p-[24px]"
                        style={{boxShadow: "rgba(2, 1, 1, 0.08) 0px 5px 10px -5px"}}
                      >
                        Games
                      </div>
                    )}
                  >
                    <li>
                      <a>{item}</a>
                    </li>
                  </Trigger>
                );
              } else {
                return (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : "/develop"}>{item}</Link>
                  </li>
                );
              }
            })}
          </ul>
          {/* cart */}
          <div className="cart mr-[12px] relative cursor-pointer">
            <span
              title="cart"
              className="iconfont icon-shopping-cart-fill text-[24px] text-[#666666] hover:text-[#c32200]"
            ></span>
            <div className="total absolute top-[3px] right-[-8px] w-[16px] h-[16px] rounded-full bg-[#c32200] leading-[16px] text-center text-[#ffffff] text-[12px]">
              8
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
