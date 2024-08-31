import { Layout } from "../../components/layout";
import Startholiday from "./../../components/features/home/Startholiday";
import Mostpicked from "./../../components/features/home/Mostpicked";
import Housesbackyard from "./../../components/features/home/Housesbackyard";
import Hotelslivingroom from "./../../components/features/home/Hotelslivingroom";
import Apartementkitchen from "./../../components/features/home/Apartementkitchen";
import Happyfamily from "./../../components/features/home/Happyfamily";

const Home = () => {
  return (
    <Layout navRole="main">
      <Startholiday />
      <Mostpicked />
      <Housesbackyard />
      <Hotelslivingroom />
      <Apartementkitchen />
      <Happyfamily />
    </Layout>
  );
};

export default Home;
