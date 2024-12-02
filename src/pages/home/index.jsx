import { Layout } from "../../components/layout";
import Startholiday from "./../../components/features/home/Startholiday";
import Mostpicked from "./../../components/features/home/Mostpicked";
import Happyfamily from "./../../components/features/home/Happyfamily";
import HotelsComponent from "../../components/features/home/HotelsComponent";

const Home = () => {
  return (
    <Layout navRole="main">
      <Startholiday />
      <Mostpicked />
      <HotelsComponent categoryName={"houses with backyard"} />
      <HotelsComponent categoryName={"hotels with living room"} />
      <HotelsComponent categoryName={"apartement with kitchen"} />
      <Happyfamily />
    </Layout>
  );
};

export default Home;
