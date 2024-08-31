import Housedails from "../../components/about/Housedails";
import Abouttheplace from "../../components/about/Abouttheplace";
import Thingstodo from "../../components/about/Thingstodo";
import { Layout } from "../../components/layout";

const About = () => {
  return (
    <Layout>
      <Housedails />
      <Abouttheplace />
      <Thingstodo />
    </Layout>
  );
};

export default About;
