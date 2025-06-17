import Button from "../ui/Button";
import Divider from "../ui/Divider";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  md:m-h-screen">
      <div className="flex flex-col w-full items-end xl:px-5 px-2">
        <span className="xl:text-[36.82px] py-2 text-2xl">
          CLEAN UP, SNAP, EARN
        </span>
      </div>
      <Divider />
      <h1 className="text-4xl font-family-bebas">DECLEANUP NETWORK</h1>
      <Divider />
      <div className="sm:px-5 px-2 w-full">
       
        <div className="w-full mb-6 flex flex-col items-center sm:gap-y-2 gap-y-1">
          <p className="xl:bg-[#FAFF00] text-center mt-4 mx-auto px-2 w-fit leading-[1]">
            <span className="bg-[#FAFF00] xl:w-fit w-full px-1 text-center xl:bg-transparent md:text-8xl">
                Empowering Cleanups. tokenizing impact
            </span>
          </p>
          <p className="text-center w-fit max-w-[98ch] mt-5 text-5xl leading-14">
            Build a global network of environmental action by tokenizing cleanup
            outcomes of individuals, grassroots groups and ngos as Impact
            Products - onchain commodities that capture, verify and reward their
            impact.
          </p>
        </div>
      </div>
      <Divider className="mt-6 md:mt-14" />
      <div className="sm:px-5 px-2 mb-4  w-full">
        <Button className="hover:bg-black/80">GET STARTED</Button>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
