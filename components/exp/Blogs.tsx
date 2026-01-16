import { SectionHeader } from "@/components/utils/SectionHeader";
import { BlogsItem } from "./BlogsItem";
import { BlogsData } from "./BlogsData"; 

export const Blogs = () => {
  return (
    <section className="section-wrapper" id="Blogs">
      <SectionHeader title="Blogs" dir="l" />

      {BlogsData.map((item) => (
        <BlogsItem key={item.title} {...item} />
      ))}
    </section>
  );
};