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
      <section id="main" className="min-h-screen">
        <MainServerContainer params={params} />
      </section>
      <section id="intro" className="min-h-screen">
        <IntroServerContainer />
      </section>
      <section id="skills" className="min-h-screen">
        <SkillServerContainer />
      </section>
      <section id="career" className="min-h-screen">
        <CareerServerContainer />
      </section>
      <section id="projects" className="min-h-screen">
        <ProjectServerContainer />
      </section>
      <section id="archiving" className="min-h-screen">
        <ArchivingServerContainer />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactServerContainer />
      </section>
    </main>
  );
}
