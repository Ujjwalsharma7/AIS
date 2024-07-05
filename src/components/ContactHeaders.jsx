import PropTypes from "prop-types";

const ContactHeaders = ({ className = "", address }) => {
  return (
    <div
      className={`self-stretch h-[114px] relative shrink-0 text-left text-6xl text-darkslategray-200 font-inter ${className}`}
    >
      <b className="absolute top-[0px] left-[0px] leading-[249%] inline-block min-w-[122px] z-[1] mq450:text-xl mq450:leading-[50px]">
        {address}
      </b>
      <div className="absolute top-[54px] left-[0px] w-[700px] h-[60px] text-4xl text-gray-300">
        <div className="absolute top-[0px] left-[0px] rounded-2xl box-border w-[700px] h-14 border-[1px] border-solid border-black" />
        <div className="absolute top-[3px] left-[11.6px] leading-[249%] font-medium z-[1] mq450:text-lg mq450:leading-[46px]">
          Type Your Answer....
        </div>
      </div>
    </div>
  );
};

ContactHeaders.propTypes = {
  className: PropTypes.string,
  address: PropTypes.string,
};

export default ContactHeaders;
