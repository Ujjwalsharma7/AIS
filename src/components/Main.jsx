import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Component from "./Component";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[52.2px] box-border max-w-full mq825:pb-[34px] mq825:box-border ${className}`}
    >
      <TopBar
        frameDivFlex="unset"
        frameDivAlignSelf="stretch"
        onHomeTextClick={onHomeTextClick}
        onAboutTextClick={onAboutTextClick}
      />
      <Component />
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
