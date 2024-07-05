import TopBar1 from "../components/TopBar1";
import OpportunitiesContent from "../components/OpportunitiesContent";
import Footer1 from "../components/Footer1";

const Opportunities = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <TopBar1 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full text-center text-51xl text-white font-heavitas">
        <div className="flex-1 flex flex-col items-center justify-start pt-[182.2px] px-5 pb-[80.3px] box-border relative gap-[11.2px] max-w-full z-[1] mq450:pt-[118px] mq450:pb-[52px] mq450:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(4px)] bg-gray-500" />
          <h1 className="m-0 w-[1180px] h-[72.3px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq825:text-37xl mq450:text-23xl">
            ONGC Internship Program
          </h1>
          <div className="w-[1180px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-41xl font-harmattan">
            <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq825:text-29xl mq450:text-17xl">
              Empower Your Future
            </h1>
          </div>
        </div>
      </section>
      <img
        className="w-full h-[447.9px] absolute !m-[0] top-[118px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/wallpaperflare@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[41px] pr-[60px] pl-[61px] box-border max-w-full lg:pl-[30px] lg:pr-[30px] lg:pb-[27px] lg:box-border mq825:pb-5 mq825:box-border">
        <OpportunitiesContent />
      </section>
      <Footer1 />
    </div>
  );
};

export default Opportunities;
