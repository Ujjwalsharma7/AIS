import FrameComponent1 from "../components/FrameComponent1";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <img
        className="w-full h-[447.9px] absolute !m-[0] top-[118px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/wallpaperflare@2x.png"
      />
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[482.9px] box-border gap-[22px] max-w-full mt-[-447.9px] lg:pb-[204px] lg:box-border mq450:pb-[133px] mq450:box-border mq1400:pb-[314px] mq1400:box-border">
        <Component />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[60px] pl-[61px] box-border max-w-full lg:pl-[30px] lg:pr-[30px] lg:box-border">
          <FrameComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
