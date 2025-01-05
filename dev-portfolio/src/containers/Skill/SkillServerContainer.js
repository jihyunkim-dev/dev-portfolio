import SkillClientContainer from "./SkillClientContainer";
import SkillServerBlock from "./SkillServerBlock";

export default function SkillServerContainer() {
  return (
    <SkillClientContainer>
      <SkillServerBlock />
    </SkillClientContainer>
  );
}
