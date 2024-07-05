import PropTypes from "prop-types";

const ResumeDropzoneElements = ({ className = "" }) => {
  return (
    <div
      className={`w-[414px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.4px] box-border max-w-full text-left text-mini text-gray-500 font-inter ${className}`}
    >
      <div className="flex-1 rounded-7xl bg-gray-100 box-border flex flex-col items-center justify-start pt-[58px] px-5 pb-[27px] gap-[29.6px] max-w-full border-[1px] border-dashed border-black">
        <div className="w-[414px] h-[208.3px] relative rounded-7xl bg-gray-100 box-border hidden max-w-full border-[1px] border-dashed border-black" />
        <div className="w-60 flex flex-row items-start justify-start py-0 pr-[70px] pl-[69px] box-border">
          <div className="h-[62.7px] flex-1 relative">
            <img
              className="absolute top-[33px] left-[0px] w-[100.2px] h-[29.7px] z-[1]"
              alt=""
              src="/upload-icon-placeholder.svg"
            />
            <img
              className="absolute top-[0px] left-[34.3px] w-[31.6px] h-[47.5px] z-[2]"
              alt=""
              src="/browse-icon-placeholder.svg"
            />
          </div>
        </div>
        <div className="relative leading-[190%] z-[1]">
          <span className="font-semibold">Drop</span>
          <span>{` your file here / `}</span>
          <span className="font-semibold">Choose</span>
          <span> a file</span>
        </div>
      </div>
    </div>
  );
};

ResumeDropzoneElements.propTypes = {
  className: PropTypes.string,
};

export default ResumeDropzoneElements;
