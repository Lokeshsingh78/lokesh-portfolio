import { Reveal } from "@/components/utils/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  link: string;
}

export const BlogsItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  link,
}: Props) => {
  return (
    <div className="mb-8 px-3 pb-6 border-b border-background-light">
      {/* Title + Date */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-3">
        <Reveal>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-3xl font-bold hover:text-brand transition
                       line-clamp-2"
          >
            {title}
          </a>
        </Reveal>

        <Reveal>
          <span className="text-sm whitespace-nowrap self-start md:self-center">
            {time}
          </span>
        </Reveal>
      </div>

      {/* Platform + Stats */}
      <div className="flex flex-wrap items-center justify-between mb-3">
        <Reveal>
          <span className="text-brand font-bold text-sm">{position}</span>
        </Reveal>

        <Reveal>
          <span className="text-sm">{location}</span>
        </Reveal>
      </div>

      {/* Description */}
      <Reveal>
        <p className="font-extralight">{description}</p>
      </Reveal>

      {/* Tech Tags */}
      <Reveal>
        <div className="flex flex-wrap gap-3 mt-4">
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
