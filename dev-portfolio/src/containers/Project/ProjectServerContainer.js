import ProjectClientContainer from "./ProjectClientContainer";
import ProjectServerBlock from "./ProjectServerBlock";

export default function ProjectServerContainer() {
  return (
    <ProjectClientContainer>
      <ProjectServerBlock />
    </ProjectClientContainer>
  );
}
