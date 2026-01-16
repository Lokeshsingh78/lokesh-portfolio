
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {

  return (
    <div className="relative">
      <Reveal>
        <div className={"statColumn"}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
       <div className={"statGrid"}>
  <span className="chip">C++</span>
  <span className="chip">Java</span>
  <span className="chip">JavaScript</span>
  <span className="chip">HTML</span>
  <span className="chip">CSS</span>
  <span className="chip">React</span>
  <span className="chip">Next.js</span>
  <span className="chip">Node.js</span>
  <span className="chip">Express.js</span>
  <span className="chip">MongoDB</span>
  <span className="chip">SQL</span>
  <span className="chip">REST APIs</span>
  <span className="chip">Bootstrap</span>
  <span className="chip">Framer Motion</span>
  <span className="chip">GSAP</span>
  <span className="chip">Android Development</span>
  <span className="chip">Android Studio</span>
  <span className="chip">Git</span>
  <span className="chip">GitHub</span>
  <span className="chip">Vercel</span>
  <span className="chip">Blender</span>
</div>

        </div>
      </Reveal>
      
    </div>
  );
};
