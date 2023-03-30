export default function FrameworkHeader() {
  return (
    <div className="framework-header">
      <div className="w-1440">
        {/* header */}
        <div className="flex justify-between ">
          <div className="flex">
            <div className="logo">logo</div>
            <div className="ml-[32px] flex items-center search">
              <input type="search" className="w-[390px] h-[42px] form-control border-2" placeholder="Search game..." />
            </div>
            <div className="cart ml-[32px] relative">
              <i
                title="cart"
                className="bi bi-cart-fill text-[22px] text-[#666666] hover:text-[#c32200] cursor-pointer"
              ></i>
              <div className="total absolute top-[20px] right-[-8px] w-[16px] h-[16px] rounded-full bg-[#c32200] leading-[16px] text-center text-[#ffffff] text-[12px]">
                8
              </div>
            </div>
          </div>
          <div className="info flex">
            <div className="icon flex items-center">
              <div>
                <i
                  title="login/register"
                  className={`bi bi-person-circle ml-[16px] text-[20px] text-[#666666] hover:text-[#c32200] cursor-pointer`}
                ></i>
              </div>
              <div>
                <i
                  title="discord"
                  className={`bi bi-discord ml-[16px] text-[20px] text-[#666666] hover:text-[#c32200] cursor-pointer`}
                ></i>
              </div>
              <div>
                <i
                  title="email"
                  className={`bi bi-envelope-fill ml-[16px] text-[20px] text-[#666666] hover:text-[#c32200] cursor-pointer`}
                ></i>
              </div>
              <select className="ml-[16px] w-[100px] form-select">
                <option value="1" selected>
                  USD
                </option>
                <option value="2">EUR</option>
                <option value="3">GBP</option>
                <option value="4">AUD</option>
                <option value="5">CAD</option>
                <option value="6">RUB</option>
              </select>
              <select className="ml-[16px] w-[100px] form-select">
                <option value="1" selected>
                  English
                </option>
                <option value="2">Français</option>
              </select>
            </div>
          </div>
        </div>
        {/* nav */}
        <div className="nav">nav</div>
      </div>
    </div>
  );
}
