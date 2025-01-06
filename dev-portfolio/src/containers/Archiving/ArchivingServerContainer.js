import ArchivingClientContainer from "./ArchivingClientContainer";
import ArchivingServerBlock from "./ArchivingServerBlock";

export default function ArchivingServerContainer() {
  return (
    <ArchivingClientContainer>
      <ArchivingServerBlock />
    </ArchivingClientContainer>
  );
}
