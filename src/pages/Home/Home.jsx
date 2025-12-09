import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Book from "../Book/Book";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Book data={data}></Book>
    </div>
  );
};

export default Home;
