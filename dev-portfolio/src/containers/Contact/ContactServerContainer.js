import ContactClientContainer from "./ContactClientContainer";
import ContactServerBlock from "./ContactServerBlock";

export default function ContactServerContainer() {
  return (
    <ContactClientContainer>
      <ContactServerBlock />
    </ContactClientContainer>
  );
}
