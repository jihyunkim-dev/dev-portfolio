import MainServerContainer from "@/containers/Main/MainServerContainer";

export default function Home(props) {
  const { params } = props;
  return <MainServerContainer params={params} />;
}
