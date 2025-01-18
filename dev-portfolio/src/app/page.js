import NavBar from "@/components/NavBar";
import ArchivingServerContainer from "@/containers/Archiving/ArchivingServerContainer";
import CareerServerContainer from "@/containers/Career/CareerServerContainer";
import ContactServerContainer from "@/containers/Contact/ContactServerContainer";
import IntroServerContainer from "@/containers/Intro/IntroServerContainer";
import MainServerContainer from "@/containers/Main/MainServerContainer";
import ProjectServerContainer from "@/containers/Project/ProjectsServerContainer";
import SkillServerContainer from "@/containers/Skills/SkillServerContainer";

export default function Root(props) {
  const { params } = props;
  return (
    <main className="flex flex-col">
      <NavBar />
      <div className="flex">
        <MainServerContainer params={params} />
      </div>
      <div className="flex">
        <IntroServerContainer />
      </div>
      <SkillServerContainer />
      <CareerServerContainer />
      <ProjectServerContainer />
      <ArchivingServerContainer />
      <ContactServerContainer />
    </main>
  );
}
