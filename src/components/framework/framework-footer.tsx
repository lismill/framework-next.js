import Image from "next/image";
import logo from "../../../public/images/common/logo.png";

export default function FrameworkFooter() {
  return (
    <div className="framework-footer">
      <div className="w-[1280px] mx-auto flex justify-between">
        <div className="logo">
          <p className="h-[60px]">
            Logo
            {/* <Image src={logo} alt="logo" /> */}
          </p>
          <p>Registered Names and Trademarks are the copyright and property of their respective owners.</p>
          <p>
            Copyright © 2022-2023,IG GIANTECH LTD with registered address 291 BRIGHTON ROAD SOUTH CROYDON UNITED KINGDOM
            CR2 6EQ.,
            <br />
            All Rights Reserved.
          </p>
        </div>
        <div className="link flex">
          <dl>
            <dt>CATEGORIES</dt>
            <dd>
              <a>Buy DOFUS</a>
            </dd>
            <dd>
              <a>D2R LADDER</a>
            </dd>
          </dl>
          <dl>
            <dt>WEBSITE</dt>
            <dd>
              <a>Contact Us</a>
            </dd>
            <dd>
              <a>Reviews</a>
            </dd>
            <dd>
              <a>Member</a>
            </dd>
            <dd>
              <a>Terms</a>
            </dd>
          </dl>
          <dl>
            <dt>POLICIES</dt>
            <dd>
              <a>Privacy Policy</a>
            </dd>
            <dd>
              <a>Site Map</a>
            </dd>
            <dd>
              <a>Refund Policy</a>
            </dd>
          </dl>
        </div>
      </div>
      <div className="notice">Notice : Using illegal leveling and gold service might terminate the account</div>
    </div>
  );
}
