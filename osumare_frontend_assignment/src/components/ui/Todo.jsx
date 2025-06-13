import FeatureCard from "../custom/FeatureCard";

const img1 = "/todo1.png";
const img2 = "/todo2.png";
const img3 = "/todo3.png";
const img4 = "/todo4.png";
export default function Todo() {
  return (
    <>
      <div className="mb-20">
        <h1 className="font-roboto font-bold text-4xl text-center text-[#170F49] pt-10 m-16 mb-14">
          Transform Your Productivity with Our <br /> Innovative To-Do List
          Features
        </h1>
        <div className="flex flex-row justify-center items-center gap-7 ">
          <FeatureCard
            num="01"
            imag={img1}
            title="User-Friendly Interface"
            desc="Our platform offers seamless task management to boost your efficiency."
          />
          <FeatureCard
            num="02"
            imag={img2}
            title="Collaborate & Share Effortlessly"
            desc="Invite team members to work together and achieve your goals faster."
          />
          <FeatureCard
            num="03"
            imag={img3}
            title="Effortless Collaboration"
            desc="Invite team members to work together and achieve your goals faster."
          />
          <FeatureCard
            num="04"
            imag={img4}
            title=" Seamless Access"
            desc="Stay connected and manage your tasks on the go with ease."
          />
        </div>
      </div>
    </>
  );
}
