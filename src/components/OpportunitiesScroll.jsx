import { Button } from "@mui/material";
import PropTypes from "prop-types";

const OpportunitiesScroll = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-11xl box-border flex flex-row items-start justify-start pt-0 px-4 pb-[3px] gap-[18.4px] max-w-full text-left text-30xl text-black font-harmattan border-[0.3px] border-solid border-black lg:flex-wrap ${className}`}
    >
      <div className="h-[199px] w-[947px] relative rounded-11xl box-border hidden max-w-full border-[0.3px] border-solid border-black" />
      <div className="h-48 w-[261px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-8@2x.png"
        />
      </div>
      <div className="h-[195px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <img
          className="w-[0.3px] flex-1 relative max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[395px] max-w-full mq825:min-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq825:text-20xl mq450:text-10xl">
          Software Engineer Internship
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start gap-[46px] max-w-full mt-[-4px] text-7xl text-gray-400 mq825:flex-wrap mq825:gap-[23px]">
          <b className="relative leading-[122%] inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[25px]">
            <p className="m-0">Duration : 1- 1.5 Months</p>
            <p className="m-0">Requirements : DSA, Web Development</p>
            <p className="m-0">In-Office / Work From Home</p>
          </b>
          <div className="w-[190px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[190px] mq825:flex-1">
            <Button
              className="self-stretch h-[59px] z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "40",
                background: "rgba(164, 29, 35, 0.76)",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "rgba(164, 29, 35, 0.76)" },
                height: 59,
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

OpportunitiesScroll.propTypes = {
  className: PropTypes.string,
};

export default OpportunitiesScroll;
