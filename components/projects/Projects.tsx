import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import {projects} from "@/components/projects/ProjectsData";

export const Projects = () => {
    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};
