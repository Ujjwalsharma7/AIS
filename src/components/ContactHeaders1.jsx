import { useMemo } from "react";
import PropTypes from "prop-types";

const ContactHeaders1 = ({ className = "", phoneNumber, propGap }) => {
  const contactHeadersStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-6xl text-darkslategray-200 font-inter ${className}`}
      style={contactHeadersStyle}
    >
      <b className="relative leading-[249%] whitespace-nowrap z-[1] mq450:text-xl mq450:leading-[50px]">
        {phoneNumber}
      </b>
      <div className="self-stretch rounded-2xl box-border flex flex-row items-start justify-start py-0 px-[11px] max-w-full mt-[-10px] text-4xl text-gray-300 border-[1px] border-solid border-black">
        <div className="self-stretch w-[700px] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-black" />
        <div className="relative leading-[249%] font-medium z-[1] mq450:text-lg mq450:leading-[46px]">
          Type Your Answer....
        </div>
      </div>
    </div>
  );
};

ContactHeaders1.propTypes = {
  className: PropTypes.string,
  phoneNumber: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default ContactHeaders1;
