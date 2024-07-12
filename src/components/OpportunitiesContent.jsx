import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OpportunitiesScroll from "./OpportunitiesScroll";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const OpportunitiesContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[36.7px] max-w-full text-left text-43xl text-brown-100 font-harmattan mq825:gap-[18px] mq1400:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[55.6px] pb-0 pr-[30px] pl-0 box-border min-w-[635px] max-w-full lg:pt-9 lg:box-border mq825:pt-[23px] mq825:box-border mq825:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="w-[808px] flex flex-col items-start justify-start gap-[47.9px] max-w-full mq450:gap-[24px]">
            <h1 className="m-0 w-[300px] h-[-15px] relative text-inherit leading-[140.97%] font-bold font-inherit inline-block mq825:text-31xl mq825:leading-[70px] mq450:text-18xl mq450:leading-[52px]">
              Opportunites
            </h1>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-brown-100" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full shrink-0 text-30xl text-black mq825:gap-[16px]">
            <OpportunitiesScroll />
            <OpportunitiesScroll />
            <OpportunitiesScroll />
            <OpportunitiesScroll />
          </div>
        </div>
      </div>
      <div className="h-[1117px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border mq1400:hidden">
        <div className="w-[0.3px] flex-1 relative box-border border-r-[0.3px] border-solid border-black" />
      </div>
      <div className="w-[556px] flex flex-col items-start justify-start gap-[24px] max-w-full text-18xl text-white mq1400:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6.5px] max-w-full">
          <Button
            className="self-stretch h-[71.2px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "37",
              background: "#a41d23",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#a41d23" },
              height: 71.2,
            }}
          >
            UPCOMING OPPORTUNITIES
          </Button>
          <div className="self-stretch h-[611.3px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[77.3px] box-border gap-[3px] max-w-full mq825:h-auto mq825:pb-8 mq825:box-border mq1400:pb-[50px] mq1400:box-border">
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onGroupContainerClick={onGroupContainerClick}
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <GroupComponent
              wallpaperflare="/wallpaperflare@2x.png"
              utEnimAdMinimVeniamQuisNo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[18.6px] max-w-full">
          <div className="self-stretch bg-brown-100 flex flex-row items-start justify-center pt-[10.9px] pb-[1.5px] pr-5 pl-[25px] box-border max-w-full">
            <div className="h-[64.4px] w-[556px] relative bg-brown-100 hidden max-w-full" />
            <h2 className="m-0 relative text-inherit leading-[140.97%] capitalize font-bold font-inherit z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
              {" "}
              Know more about Us
            </h2>
          </div>
          <div className="self-stretch h-[321px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border gap-[5px] max-w-full text-steelblue mq825:pb-[31px] mq825:box-border">
            <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                Recognition and Rankings
              </h2>
            </div>
            <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                Vision and Mission
              </h2>
            </div>
            <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                ONGC group of Companies
              </h2>
            </div>
            <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                New Initiatives In Energy
              </h2>
            </div>
            <div className="self-stretch h-[88px] rounded-21xl bg-whitesmoke box-border shrink-0 flex flex-row items-start justify-center py-[18px] pr-5 pl-[21px] max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 self-stretch w-[151px] relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit inline-block z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                technology
              </h2>
            </div>
            <div className="self-stretch h-[88px] rounded-21xl bg-whitesmoke box-border shrink-0 flex flex-row items-start justify-center py-[18px] pr-5 pl-[21px] max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
              <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
              <h2 className="m-0 self-stretch w-[137px] relative text-inherit [text-decoration:underline] leading-[140.97%] capitalize font-bold font-inherit inline-block z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                Ornogram
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OpportunitiesContent.propTypes = {
  className: PropTypes.string,
};

export default OpportunitiesContent;
