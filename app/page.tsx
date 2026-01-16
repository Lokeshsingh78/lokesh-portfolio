
import {SideBar} from "@/components/nav/Sidebar";
import {Hero} from "@/components/Hero";
import { About } from "@/components/About";
import {Header} from "@/components/Header";
import {Contact} from "@/components/Contact";
import {Projects} from "@/components/projects/Projects";
import { Blogs } from "@/components/exp/Blogs";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_60px] w-full h-screen overflow-hidden">
      <main id="main" className=" overflow-x-hidden">
          <Header/>
          <Hero/>
          <About/>
          <Projects/>
          <Blogs/>
          <Contact/>
        <div
            style={{
              height: "200px",
              background:
                  "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
        />
      </main>
        <SideBar/>
    </div>
  );
}
