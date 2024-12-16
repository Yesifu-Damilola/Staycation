import Housedails from "../../components/about/Housedails";
import Abouttheplace from "../../components/about/Abouttheplace";
import Thingstodo from "../../components/about/Thingstodo";
import { Layout } from "../../components/layout";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import { CustomLoader } from "../../components/CustomLoader";

const About = () => {
  const { id } = useParams();
  const query = {
    apiName: "hotels",
    key: "id",
    value: id,
  };
  const { data, status, error } = useFetch(query);

  if (status === "pending") {
    return <CustomLoader />;
  }

  if (status === "error") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <Layout>
      {data && status === "success" ? (
        <>
          <Housedails data={data} />
          <Abouttheplace data={data} />
          <Thingstodo />
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p>No data available</p>
        </div>
      )}
    </Layout>
  );
};

export default About;
