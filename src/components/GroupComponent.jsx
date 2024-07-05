import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  wallpaperflare,
  utEnimAdMinimVeniamQuisNo,
  onGroupContainerClick,
}) => {
  return (
    <div
      className={`self-stretch bg-gainsboro box-border flex flex-row items-start justify-start py-0 pr-[23px] pl-0 gap-[30px] shrink-0 max-w-full text-left text-xl text-black font-inter border-t-[0.3px] border-solid border-black border-b-[0.3px] mq825:flex-wrap mq825:gap-[15px] mq825:p-5 mq825:box-border ${className}`}
      onClick={onGroupContainerClick}
    >
      <div className="self-stretch w-[556px] relative bg-gainsboro box-border hidden max-w-full border-t-[0.3px] border-solid border-black border-b-[0.3px]" />
      <img
        className="h-44 w-[187px] relative object-cover z-[1] mq825:flex-1"
        alt=""
        src={wallpaperflare}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[205px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="relative leading-[140.97%] font-semibold z-[1] mq450:text-base mq450:leading-[23px]">
            XYZ INTERNSHIP
          </div>
          <div className="self-stretch relative text-base leading-[140.97%] z-[1]">
            {utEnimAdMinimVeniamQuisNo}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  wallpaperflare: PropTypes.string,
  utEnimAdMinimVeniamQuisNo: PropTypes.string,

  /** Action props */
  onGroupContainerClick: PropTypes.func,
};

export default GroupComponent;
