import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-end justify-start gap-[36.7px] max-w-full text-left text-43xl text-brown-100 font-harmattan mq825:gap-[18px] mq1400:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border min-w-[635px] min-h-[798px] max-w-full mq825:pb-[31px] mq825:box-border mq825:min-w-full mq450:pb-5 mq450:box-border">
        <div className="w-[919px] flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[24.4px] box-border max-w-full">
            <b className="w-[345px] relative leading-[-25.1px] inline-block max-w-full mq825:text-31xl mq825:leading-[70px] mq450:text-18xl mq450:leading-[52px]">
              Intern With Us
            </b>
          </div>
          <div className="w-[809px] h-px relative box-border max-w-full z-[1] border-t-[1px] border-solid border-brown-100" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-justify text-lg text-black font-inter">
            <div className="self-stretch flex flex-row items-start justify-start gap-[34px] max-w-full mq825:flex-wrap mq450:gap-[17px]">
              <div className="w-[346px] relative leading-[140.97%] whitespace-pre-wrap inline-block shrink-0 min-w-[346px] max-w-full mq825:flex-1 mq825:min-w-full">{`Maharatna, ONGC is the largest producer of crude oil and natural gas Company in India, contributing around 70 per cent to Indian domestic production. The crude oil is the raw material used by downstream companies like IOC, BPCL, and HPCL to produce petroleum products like Petrol, Diesel, Kerosene, Naphtha, and Cooking Gas-LPG. Take this unique opportunity to grow and learn during an enriching internship with the highest dividend paying company in the country.                                                 `}</div>
              <img
                className="h-[312px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[350px] mq825:min-w-full"
                alt=""
                src="/unsplashomrpeqlz6po@2x.png"
              />
            </div>
            <div className="self-stretch relative leading-[140.97%]">{`At ONGC, we offer many exciting opportunities for college students and recent graduates who want to develop relevant skills in a collaborative, dynamic and fast-paced environment. Our interns gain real, meaningful experience working for a global leader in the Oil & Gas industry.Our various internship programs are a collaborative learning and practical development opportunity. Interns learn from and network with company leaders from a wide range of business functions, including marketing, sales, drilling & exploration technology, CSR, Corporate Communication, Human Resources and finance, all while providing the opportunity to build professional and personal relationships that can help you design your future.`}</div>
            <div className="self-stretch relative tracking-[-0.01px] leading-[140.97%]">
              ONGC is committed to groom talent to prepare the road map for
              tomorrow’s national energy security. With this in view, ONGC
              offers various internship opportunities apart from Oil and Gas
              Jobs for freshers at ONGC.
            </div>
            <div className="self-stretch relative leading-[140.97%]">
              Are you a current student and would like to do an internship at
              ONGC? If you want to take the next steps towards designing a
              better future for yourself, contact local ONGC Human Resource
              Department for Internship queries.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[849.3px] w-[0.3px] relative box-border border-r-[0.3px] border-solid border-black mq1400:hidden mq1400:w-full mq1400:h-[0.3px]" />
      <div className="w-[556px] flex flex-col items-start justify-start gap-[7px] max-w-full text-18xl text-white mq1400:flex-1">
        <div className="bg-brown-100 flex flex-row items-start justify-start pt-[13px] px-20 pb-3 box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
          <div className="h-[77px] w-[556px] relative bg-brown-100 hidden max-w-full" />
          <b className="relative leading-[140.97%] z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
            UPCOMING OPPORTUNITIES
          </b>
        </div>
        <div className="self-stretch h-[769px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-14 box-border gap-[3px] max-w-full text-xl text-black font-inter mq825:h-auto mq825:pb-[23px] mq825:box-border mq1400:pb-9 mq1400:box-border">
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
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
