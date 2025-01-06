import CareerClientContainer from "./CareerClientContainer";
import CareerServerBlock from "./CareerServerBlock";

export default function CareerServerContainer() {
  return (
    <CareerClientContainer>
      <CareerServerBlock />
    </CareerClientContainer>
  );
}
