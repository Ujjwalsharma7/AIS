import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-brown-100 flex flex-col items-start justify-start pt-[39px] pb-[29px] pr-[60px] pl-[61px] box-border gap-[9px] max-w-full text-left text-43xl text-white font-inter lg:pl-[30px] lg:pr-[30px] lg:box-border mq825:pt-[25px] mq825:pb-5 mq825:box-border ${className}`}
    >
      <div className="w-[1728px] h-[616px] relative bg-brown-100 hidden max-w-full" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[35.5px] max-w-full font-harmattan mq825:gap-[18px]">
        <h1 className="m-0 relative text-inherit leading-[140.97%] font-bold font-inherit z-[1] mq825:text-31xl mq825:leading-[70px] mq450:text-18xl mq450:leading-[52px]">
          Reach Us
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start pt-[40.5px] px-0 pb-0 box-border min-w-[887px] max-w-full lg:min-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/contact-icon.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-[26px] box-border max-w-full text-12xl">
        <h3 className="m-0 relative text-inherit leading-[164%] z-[1] font-inherit mq825:text-6xl mq825:leading-[41px] mq450:text-lgi mq450:leading-[31px]">
          <p className="m-0">
            <b>Registered Office:</b>
          </p>
          <p className="m-0">
            Plot No. 5A- 5B Nelson Mandela Road, Vasant Kunj, New Delhi, 110070
          </p>
          <p className="m-0">
            <b>Corporate Identity Number:</b>
          </p>
          <p className="m-0">L74899DL1993GOI054155</p>
          <p className="m-0">
            <b className="font-inter">Telephone No.</b>
            <span className="font-inter"> 011-26750998; </span>
            <b className="font-inter">Fax No:</b>
            <span> 011-26750991/ 26129091</span>
          </p>
          <p className="m-0">
            <b>
              For registering any grievances, please visit ONGC Grievance
              portal:
            </b>
          </p>
          <p className="m-0">
            <a
              className="text-[inherit]"
              href="https://grievance.ongc.co.in/"
              target="_blank"
            >
              <span className="font-light">https://grievance.ongc.co.in</span>
            </a>
          </p>
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/copyright-icon.svg"
        />
      </div>
      <div className="relative text-7xl leading-[37px] text-black inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[29px]">
        Copyright Oil and Natural Gas Corporation Limited, All Rights Reserved.
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
