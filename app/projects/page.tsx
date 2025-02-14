import { Subtitle } from "@/components/ui/subtitle";
import { ProjectsList } from "@/components/projects/projects-list";

export default async function ProjectsPage() {
  return (
    <>
      <h1>Klick Dich durch</h1>
      <Subtitle>Eine kleine Auswahl meiner letzten Projekte!</Subtitle>

      <hr />

      <h2>Projekte</h2>
      <ProjectsList />
    </>
  );
}
