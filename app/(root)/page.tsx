import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverView";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverView
        {...sampleBooks[0]}
        userId={"1"}
        createdAt={new Date()}
      ></BookOverView>

      <BookList></BookList>
    </>
  );
};

export default Home;
