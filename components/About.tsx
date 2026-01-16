import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "./utils/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={"about"}>
        <div>
          <Reveal>
           <p className={`${"aboutText"} ${"highlightFirstLetter"}`}>
  Hey there! I'm Lokesh Singh Tanwar, a B.Tech student specializing in Artificial Intelligence and Data Science.
  <br/><br/>
  I work as a full-stack professional with strong expertise in the MERN stack, Android app development, and modern frontend technologies. I enjoy transforming ideas into clean, scalable, and user-focused digital Blogss.
  <br/><br/>
  Beyond coding, I actively write technical blogs, contribute to open-source projects, and continuously explore emerging technologies. I believe in learning by building, improving through feedback, and creating solutions that truly make an impact.
</p>

          </Reveal>
          <Reveal>
        <p className={'aboutText'}>
  I'm always curious to try new ideas and take on meaningful projects that help me grow.
  If you'd like to collaborate, exchange thoughts, or simply connect, feel free to reach out.
  🔗
</p>

          </Reveal>
          <Reveal>
            <div className={"links"}>
              <div className={"linksText"}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
