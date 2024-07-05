import ContactHeaders1 from "./ContactHeaders1";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[32.8px] box-border gap-[23.3px] max-w-full text-left text-6xl text-darkslategray-200 font-inter ${className}`}
    >
      <div className="w-[909px] h-[-6.6px] flex flex-col items-start justify-start gap-[6.6px] max-w-full">
        <b className="h-[-6.6px] relative leading-[249%] inline-block min-w-[61px] shrink-0 z-[1] mq450:text-xl mq450:leading-[50px]">{`Role: `}</b>
        <div className="self-stretch h-[-6.6px] flex flex-row items-start justify-end shrink-0">
          <b className="h-[-6.6px] relative leading-[249%] inline-block min-w-[79px] z-[1] mq450:text-xl mq450:leading-[50px]">{`Name: `}</b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1425:flex-wrap">
        <div className="w-[700px] flex flex-col items-start justify-start gap-[46.4px] max-w-full mq825:gap-[23px]">
          <div className="self-stretch rounded-2xl box-border flex flex-row items-start justify-start py-0 px-[13px] max-w-full text-4xl text-gray-300 border-[1px] border-solid border-black">
            <div className="self-stretch w-[700px] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-black" />
            <div className="relative leading-[249%] font-medium z-[2] mq450:text-lg mq450:leading-[46px]">
              Type Your Answer....
            </div>
          </div>
          <div className="h-[76.5px] flex flex-col items-start justify-start gap-[22.7px]">
            <b className="h-[-3.2px] relative leading-[249%] inline-block z-[1] mq450:text-xl mq450:leading-[50px]">
              Start / End Date:
            </b>
            <div className="w-[142px] flex-1 flex flex-row items-start justify-start text-4xl text-gray-300">
              <div className="w-[142px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch h-[45px] flex flex-row items-start justify-start py-1.5 px-0 box-border relative gap-[16px]">
                  <img
                    className="mt-[-11.5px] h-14 w-[53px] relative object-cover"
                    alt=""
                    src="/unsplashvpwafrqtbzm@2x.png"
                  />
                  <img
                    className="h-[33px] w-[18px] relative"
                    alt=""
                    src="/divider.svg"
                  />
                  <img
                    className="h-14 w-[53px] absolute !m-[0] top-[calc(50%_-_28px)] right-[-14px] object-cover"
                    alt=""
                    src="/unsplashvpwafrqtbzm@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch w-0 relative leading-[249%] font-medium whitespace-pre-wrap inline-block z-[2] ml-[-129px] mq450:text-lg mq450:leading-[46px]">{`     `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[17.4px] max-w-full">
            <b className="h-[-0.7px] relative leading-[249%] inline-block max-w-full z-[1] mq450:text-xl mq450:leading-[50px]">
              Name of the Institution/Company:
            </b>
            <div className="self-stretch h-[62px] relative text-4xl text-gray-300">
              <div className="absolute top-[0px] left-[0px] rounded-2xl box-border w-[700px] h-14 border-[1px] border-solid border-black" />
              <div className="absolute top-[5px] left-[13px] leading-[249%] font-medium z-[2] mq450:text-lg mq450:leading-[46px]">
                Type Your Answer....
              </div>
            </div>
          </div>
        </div>
        <div className="h-[302px] w-[700px] flex flex-col items-start justify-start pt-0 px-0 pb-[121px] box-border gap-[13px] max-w-full text-4xl text-gray-300 mq450:pb-[79px] mq450:box-border">
          <div className="self-stretch rounded-2xl box-border flex flex-row items-start justify-start py-0 px-[13px] max-w-full border-[1px] border-solid border-black">
            <div className="self-stretch w-[700px] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-black" />
            <div className="relative leading-[249%] font-medium z-[2] mq450:text-lg mq450:leading-[46px]">
              Type Your Answer....
            </div>
          </div>
          <ContactHeaders1 phoneNumber="ID info:" propGap="unset" />
          <ContactHeaders1 phoneNumber="Contact Info.:" propGap="unset" />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
