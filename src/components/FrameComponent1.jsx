import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);
  const onOpportunitiesTextClick = useCallback(() => {
    navigate("/opportunities");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[447.9px] box-border max-w-full text-center text-xl text-white font-inter mq825:pb-[291px] mq825:box-border ${className}`}
    >
      <TopBar
        onAboutTextClick={onAboutTextClick}
        onOpportunitiesTextClick={onOpportunitiesTextClick}
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
