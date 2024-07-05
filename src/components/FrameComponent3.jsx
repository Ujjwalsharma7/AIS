import ContactHeaders1 from "./ContactHeaders1";
import ContactHeaders from "./ContactHeaders";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1517px] flex flex-col items-start justify-start pt-0 px-0 pb-[36.3px] box-border gap-[19.3px] max-w-full text-left text-6xl text-darkslategray-200 font-inter ${className}`}
    >
      <div className="h-[-6.6px] flex flex-row items-start justify-start pt-0 px-2.5 pb-0 box-border">
        <b className="h-[-6.6px] relative leading-[249%] inline-block whitespace-nowrap mq450:text-xl mq450:leading-[50px]">{`Full Name :  `}</b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8.6px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[107px] max-w-full mq825:gap-[53px] mq450:gap-[27px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[461px] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[88.1px] max-w-full mq825:gap-[44px] mq450:gap-[22px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
                <div className="h-[425px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[120px] box-border gap-[12px] max-w-full mq825:pb-[78px] mq825:box-border">
                  <div className="self-stretch rounded-2xl box-border flex flex-row items-start justify-start py-0 px-[11px] max-w-full text-4xl text-gray-300 border-[1px] border-solid border-black">
                    <div className="self-stretch w-[700px] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-black" />
                    <div className="relative leading-[249%] font-medium z-[1] mq450:text-lg mq450:leading-[46px]">
                      Type Your Answer....
                    </div>
                  </div>
                  <ContactHeaders1 phoneNumber="Phone Number :  " />
                  <ContactHeaders1
                    phoneNumber="Email Address :  "
                    propGap="unset"
                  />
                  <ContactHeaders address=" Address :" />
                </div>
              </div>
              <b className="h-[-9px] relative text-20xl leading-[122%] inline-block font-harmattan z-[2] text-brown-200 mq825:text-12xl mq825:leading-[38px] mq450:text-4xl mq450:leading-[29px]">
                <span>{`Experience `}</span>
                <span className="text-gray-200">(optional)</span>
              </b>
            </div>
          </div>
          <div className="h-[425px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[120px] box-border gap-[12px] min-w-[455px] max-w-full text-4xl text-gray-300 mq825:pb-[78px] mq825:box-border mq825:min-w-full">
            <div className="self-stretch rounded-2xl box-border flex flex-row items-start justify-start py-0 px-[13px] max-w-full border-[1px] border-solid border-black">
              <div className="self-stretch w-[700px] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-black" />
              <div className="relative leading-[249%] font-medium z-[2] mq450:text-lg mq450:leading-[46px]">
                Type Your Answer....
              </div>
            </div>
            <ContactHeaders1 phoneNumber="Branch/Stream:" propGap="unset" />
            <ContactHeaders1 phoneNumber="Year of Study:  " propGap="unset" />
            <ContactHeaders address="Relevant Coursework" />
          </div>
        </div>
        <div className="self-stretch h-[-8.6px] flex flex-row items-start justify-center py-0 pr-5 pl-[455px] box-border text-20xl text-brown-200 font-harmattan mq825:pl-[227px] mq825:box-border mq450:pl-5 mq450:box-border">
          <b className="h-[-9px] relative leading-[122%] inline-block z-[2] mq825:text-12xl mq825:leading-[38px] mq450:text-4xl mq450:leading-[29px]">
            <span>Reference</span>
            <span className="text-gray-200"> (optional)</span>
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
