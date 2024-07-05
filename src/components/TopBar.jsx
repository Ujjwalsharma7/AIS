import { useMemo, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TopBar = ({
  className = "",
  frameDivFlex,
  frameDivAlignSelf,
  onHomeTextClick,
  onAboutTextClick,
  onOpportunitiesTextClick,
}) => {
  const topBarStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);

  const navigate = useNavigate();

  // const onOpportunitiesTextClick =
  //   (() => {
  //     navigate("/opportunities");
  //   },
  //   [navigate]);

  // const onHomeTextClick = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);

  // const onAboutTextClick = useCallback(() => {
  //   navigate("/about");
  // }, [navigate]);

  return (
    <div
      className={`flex-1 bg-brown-100 flex flex-row items-end justify-between py-[9px] pr-20 pl-6 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-xl text-white font-inter lg:pr-10 lg:box-border ${className}`}
      style={topBarStyle}
    >
      <div className="h-[118px] w-[1728px] relative bg-brown-100 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[18px]">
        <img
          className="h-[100px] w-[100px] relative object-cover z-[1]"
          alt=""
          src="/ongc-logo@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-semibold z-[1] mq825:hidden mq450:text-base">
              <p className="m-0">Oil and Natural Gas</p>
              <p className="m-0">Corporation Limited</p>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-3.5 text-sm text-black">
              <b className="relative z-[1]">A Maharatna Comapany</b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[490px] flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border max-w-full text-left text-3xl mq450:w-0">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:hidden">
          <div
            className="relative font-semibold inline-block min-w-[63px] z-[1]"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <div
            className="relative font-semibold inline-block min-w-[65px] cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >
            About
          </div>
          <div
            className="relative font-semibold cursor-pointer z-[1]"
            onClick={onOpportunitiesTextClick}
          >
            Opportunities
          </div>
          <a
            className="relative font-semibold text-[inherit] inline-block [text-decoration:none] min-w-[49px] z-[1]"
            href="https://ongcindia.com/web/eng/about-ongc/contact-us-1"
            target="_blank"
          >
            Help
          </a>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivFlex: PropTypes.any,
  frameDivAlignSelf: PropTypes.any,

  /** Action props */
  onHomeTextClick: PropTypes.func,
  onAboutTextClick: PropTypes.func,
  onOpportunitiesTextClick: PropTypes.func,
};

export default TopBar;
