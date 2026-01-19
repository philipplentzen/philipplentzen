import {Badge, Card} from "@philipplentzen/ui";
import {cn} from "@philipplentzen/ui/lib";

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
    | "S3"
  )[];
  status: "live" | "internal" | "archived";
  employment: "Freiberuflich";
}) => {
  const { client, tasks, tech, status, employment = "Freiberuflich" } = props;

  return (
    <Card
      className={"not-prose mb-8 @lg:grid-cols-2 gap-4 p-(--padding-width)"}
    >
      <div className={"flex flex-col"}>
        <span className={"text-muted-foreground text-sm"}>Kunde</span>
        {client}
      </div>
      <div className={"flex flex-col"}>
        <span className={"text-muted-foreground text-sm"}>Aufgaben</span>
        {tasks.join(", ")}
      </div>
      <div className={"flex flex-col"}>
        <span className={"text-muted-foreground text-sm"}>Technologien</span>
        {tech.join(", ")}
      </div>
      <div className={"flex flex-col"}>
        <span className={"text-muted-foreground text-sm"}>Anstellung</span>
        {employment}
      </div>
      <div className={"flex flex-col gap-2"}>
        <span className={"text-muted-foreground text-sm"}>Status</span>
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
    </Card>
  );
};
