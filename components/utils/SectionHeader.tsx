import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={"sectionHeader"}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={"line"} />
      <h3>
        <Reveal>
          <span className={"title"}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
