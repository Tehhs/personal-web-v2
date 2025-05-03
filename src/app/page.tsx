import { SkillsArea } from "@/components/layout/skills/SkillsArea";
import { TestComponent } from "@/components/Test/Test";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#001B3B] via-[#1E1E1E] to-[#1E0022] grid grid-rows-[20px_1fr_20px] min-h-screen">
      <main className="min-h-screen text-white max-w-[80%] w-full mx-auto px-4">
        
        {/* Part: First Impression  */}
        <div className="flex min-h-2/3 items-center bg-[#ffffff1e]">
          {/* Left side  */}
          <div className="flex flex-1 items-center flex-col font-thin">
            <div className="text-4xl flex flex-col gap-5">
              <div className="">{`Hi, I'm Liam`}</div>
              <div>
                <span className="">{`I'm a `}</span>
                <span className="font-bold">{`Software Developer`}</span>
              </div>
            </div>
          </div>
          {/* Right Side  */}
          <div className="flex flex-1 justify-center">
            <div>BIG PROFILE PICTURE</div>
          </div>
        </div>


        {/* Part: Skills  */}
        <SkillsArea/>
      </main>
    </div>
  );
}

