import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onOpportunitiesTextClick = useCallback(() => {
    navigate("/opportunities");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-center text-51xl text-white font-heavitas">
      <TopBar
        frameDivFlex="unset"
        frameDivAlignSelf="stretch"
        onHomeTextClick={onHomeTextClick}
        onOpportunitiesTextClick={onOpportunitiesTextClick}
      />
      <img
        className="w-full h-[447.9px] absolute !m-[0] top-[118px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/wallpaperflare@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start pt-[182.2px] px-5 pb-[80.3px] box-border relative gap-[11.2px] max-w-full z-[1] mq450:pt-[118px] mq450:pb-[52px] mq450:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(4px)] bg-gray-500" />
          <div className="w-[1180px] h-[72.3px] relative inline-block shrink-0 max-w-full z-[1] mq825:text-37xl mq450:text-23xl">
            ONGC Internship Program
          </div>
          <div className="w-[1180px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-41xl font-harmattan">
            <b className="relative z-[1] mq825:text-29xl mq450:text-17xl">
              Empower Your Future
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[41px] pr-[60px] pl-[61px] box-border max-w-full text-left text-43xl text-brown-100 font-harmattan lg:pl-[30px] lg:pr-[30px] lg:pb-[27px] lg:box-border mq825:pb-5 mq825:box-border">
        <div className="flex-1 flex flex-row items-end justify-start gap-[36.7px] max-w-full mq825:gap-[18px] mq1400:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[58px] pl-0 box-border gap-[58.4px] min-w-[635px] max-w-full lg:pr-[29px] lg:box-border mq825:gap-[29px] mq825:min-w-full">
            <b className="w-52 h-[-25px] relative leading-[140.97%] inline-block z-[1] mq825:text-31xl mq825:leading-[70px] mq450:text-18xl mq450:leading-[52px]">
              About Us
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-justify text-lg text-black font-inter">
              <div className="w-[809px] h-px relative box-border max-w-full border-t-[1px] border-solid border-brown-100" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5.3px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full lg:flex-wrap">
                  <div className="w-[346px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[346px] max-w-full lg:flex-1 mq825:min-w-full">
                    <div className="self-stretch relative leading-[140.97%]">
                      <p className="m-0">
                        ONGC Represents India's Energy Security Through its
                        Pioneering Efforts.
                      </p>
                      <p className="m-0">
                        Maharatna ONGC is the largest crude oil and natural gas
                        Company in India, contributing around 71 per cent to
                        Indian domestic production. Crude oil is the raw
                        material used by downstream companies like IOC,
                        BPCL, HPCL and MRPL (Last two are subsidiaries of ONGC)
                        to produce petroleum products like Petrol, Diesel,
                        Kerosene, Naphtha, and Cooking Gas LPG.
                      </p>
                    </div>
                  </div>
                  <img
                    className="h-[312px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[350px] mq825:min-w-full"
                    alt=""
                    src="/unsplashomrpeqlz6po@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
                  <div className="flex-1 relative leading-[140.97%] inline-block max-w-full">{`ONGC has a unique distinction of being a company with in-house service capabilities in all areas of Exploration and Production of oil & gas and related oil-field services. Winner of the Best Employer award, this public sector enterprise has a dedicated team of around 26,000 professionals who toil round the clock in challenging locations.`}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
                  <div className="flex-1 relative leading-[140.97%] inline-block max-w-full">{`ONGC Videsh Limited, a Miniratna Schedule “A” Central Public Sector Enterprise (CPSE) of the Government of India under the administrative control of the Ministry of Petroleum & Natural Gas, is the wholly owned subsidiary and overseas arm of Oil and Natural Gas Corporation Limited (ONGC), the flagship national oil company (NOC) of India. The primary business of ONGC Videsh is to prospect for oil and gas acreages outside India, including exploration, development and production of oil and gas. ONGC Videsh owns Participating Interests in 35 oil and gas assets in 15 countries and produced about 30.3% of oil and 23.7% of oil and natural gas of India’s domestic production. In terms of reserves and production, ONGC Videsh is the second largest petroleum company of India, next only to its parent ONGC.`}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
                  <div className="flex-1 relative leading-[140.97%] inline-block max-w-full">{`ONGC subsidiary Mangalore Refinery and Petrochemicals Limited (MRPL) is a schedule ‘A’ Miniratna, Central Public Sector Enterprise (CPSE) under the Ministry of Petroleum & Natural Gas. The 15.0MMTPA (Million Metric Ton per annum) Refinery has got a versatile design with complex secondary processing units and a high flexibility to process Crudes of various API, delivering a variety of quality products. MRPL, with its parent company Oil and Natural Gas Corporation Limited (ONGC), owns and operates ONGC Mangalore Petrochemicals Limited (OMPL), a petrochemical unit capable of producing 0.905 MMTPA of Para Xylene and 0.273 MMTPA of Benzene.`}</div>
                </div>
                <div className="self-stretch relative leading-[140.97%]">{`ONGC subsidiary HPCL is a Maharatna CPSE. HPCL has the second largest share of product pipelines in India with a pipeline network of more than 3370 kms for transportation of petroleum products and a vast marketing network consisting of 14 Zonal offices in major cities and 133 Regional Offices facilitated by a Supply & Distribution infrastructure comprising Terminals, Pipeline networks, Aviation Service Stations, LPG Bottling Plants, Inland Relay Depots & Retail Outlets, Lube and LPG Distributorships. Consistent excellent performance has been made possible by highly motivated workforce of over 9,500 employees working all over India at its various refining and marketing locations.`}</div>
              </div>
            </div>
          </div>
          <div className="h-[1113.3px] w-[0.3px] relative box-border border-r-[0.3px] border-solid border-black mq1400:hidden mq1400:w-full mq1400:h-[0.3px]" />
          <div className="w-[556px] flex flex-col items-start justify-start gap-[24px] max-w-full text-18xl text-white mq1400:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6.5px] max-w-full">
              <div className="bg-brown-100 flex flex-row items-start justify-start pt-3 px-20 pb-[11.1px] box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
                <div className="h-[71.2px] w-[556px] relative bg-brown-100 hidden max-w-full" />
                <b className="relative leading-[48.1px] z-[1] mq825:text-11xl mq825:leading-[38px] mq450:text-3xl mq450:leading-[29px]">
                  UPCOMING OPPORTUNITIES
                </b>
              </div>
              <div className="self-stretch h-[611.3px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[77.3px] box-border gap-[3px] max-w-full mq825:h-auto mq825:pb-8 mq825:box-border mq1400:pb-[50px] mq1400:box-border">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[18.6px] max-w-full">
              <div className="self-stretch bg-brown-100 flex flex-row items-start justify-center pt-[10.9px] pb-[1.5px] pr-5 pl-[25px] box-border max-w-full">
                <div className="h-[64.4px] w-[556px] relative bg-brown-100 hidden max-w-full" />
                <b className="relative leading-[140.97%] capitalize z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]">
                  {" "}
                  Know more about Us
                </b>
              </div>
              <div className="self-stretch h-[321px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border gap-[5px] max-w-full text-steelblue mq825:pb-[31px] mq825:box-border">
                <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] pr-5 pl-[21px] shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/recognition-and-ranks"
                    target="_blank"
                  >
                    recognition And rankings
                  </a>
                </div>
                <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/vision-and-mission"
                    target="_blank"
                  >{`vision & mission`}</a>
                </div>
                <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] pr-5 pl-[33px] shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/ongc-group-of-companies"
                    target="_blank"
                  >
                    ONGC group of companies
                  </a>
                </div>
                <div className="self-stretch rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-center py-[17px] px-5 shrink-0 max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/new-initiatives-in-energy"
                    target="_blank"
                  >
                    New Initiatives In Energy
                  </a>
                </div>
                <div className="self-stretch h-[88px] rounded-21xl bg-whitesmoke box-border shrink-0 flex flex-row items-start justify-center py-[18px] pr-5 pl-[21px] max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="self-stretch w-[151px] relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] inline-block z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/technology"
                    target="_blank"
                  >
                    technology
                  </a>
                </div>
                <div className="self-stretch h-[88px] rounded-21xl bg-whitesmoke box-border shrink-0 flex flex-row items-start justify-center py-[18px] pr-5 pl-[21px] max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]">
                  <div className="h-[88px] w-[556px] relative rounded-21xl bg-whitesmoke box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
                  <a
                    className="self-stretch w-[137px] relative [text-decoration:underline] leading-[140.97%] capitalize font-bold text-[inherit] inline-block z-[1] mq825:text-11xl mq825:leading-[42px] mq450:text-3xl mq450:leading-[31px]"
                    href="https://ongcindia.com/web/eng/about-ongc/organogram"
                    target="_blank"
                  >
                    Ornogram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default About;
