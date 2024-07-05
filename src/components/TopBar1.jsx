import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TopBar1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-brown-100 flex flex-row items-end justify-between py-[9px] pr-20 pl-6 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-xl text-white font-inter lg:pr-10 lg:box-border ${className}`}
    >
      <div className="h-[118px] w-[1728px] relative bg-brown-100 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[18px]">
        <img
          className="h-[100px] w-[100px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/ongc-logo@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[1] mq825:hidden">
              <p className="m-0">Oil and Natural Gas</p>
              <p className="m-0">Corporation Limited</p>
            </a>
            <div className="flex flex-row items-start justify-start py-0 px-3.5 text-sm text-black">
              <b className="relative whitespace-nowrap z-[1]">
                A Maharatna Comapany
              </b>
            </div>
          </div>
        </div>
      </div>
      <nav className="m-0 w-[490px] flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border max-w-full mq450:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-3xl text-white font-inter">
          <a
            className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[63px] cursor-pointer z-[1]"
            onClick={onHomeTextClick}
          >
            Home
          </a>
          <a
            className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[65px] cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >
            About
          </a>
          <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[1]">
            Opportunities
          </a>
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[49px] z-[1]">
            Help
          </a>
        </nav>
      </nav>
    </header>
  );
};

TopBar1.propTypes = {
  className: PropTypes.string,
};

export default TopBar1;
