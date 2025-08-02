import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const ProjectDetails = (props: {
  client: string;
  tasks: ("Design" | "Entwicklung" | "Hosting")[];
  tech: (
    | "Next.js"
    | "Nuxt.js"
    | "Tailwind CSS"
    | "Directus"
    | "WordPress"
    | "Tauri"
    | "Static"
    | "MySQL"
    | "Custom Frameworks"
  )[];
  status: "live" | "internal" | "archived";
  employment: "Freiberuflich";
}) => {
  const { client, tasks, tech, status, employment } = props;

  return (
    <div
      className={
        "not-prose grid grid-cols-4 gap-4 rounded border border-text/20 bg-radial-[at_10%_10%] from-secondary/30 to-accent/10 p-(--padding-width) text-text"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <span className={"text-sm text-current/60"}>Kunde</span>
        {client}
      </div>
      <div className={"flex flex-col gap-1"}>
        <span className={"text-sm text-current/60"}>Aufgaben</span>
        {tasks.join(", ")}
      </div>
      <div className={"flex flex-col gap-1"}>
        <span className={"text-sm text-current/60"}>Technologien</span>
        {tech.join(", ")}
      </div>
      <div className={"flex flex-col gap-1"}>
        <span className={"text-sm text-current/60"}>Anstellung</span>
        {"Freiberuflich"}
      </div>
      <div className={"flex flex-col gap-2"}>
        <span className={"text-sm text-current/60"}>Status</span>
        <Badge
          className={cn(
            status === "live" && "text-success",
            status === "internal" && "text-accent",
            status === "archived" && "text-error",
          )}
        >
          <div className={`relative mr-1 inline-flex size-2`}>
            {status === "live" && (
              <span
                className={`absolute inline-flex size-full animate-ping rounded-full bg-current/75`}
              ></span>
            )}
            <span
              className={`relative inline-flex size-full rounded-full bg-current`}
            ></span>
          </div>
          {status}
        </Badge>
      </div>
    </div>
  );
};
