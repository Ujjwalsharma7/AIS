import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[182.2px] px-5 pb-[80.3px] box-border relative gap-[11.2px] max-w-full z-[1] text-center text-51xl text-white font-heavitas mq450:pt-[467.9px] mq450:pb-[52px] mq450:box-border ${className}`}
    >
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
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
