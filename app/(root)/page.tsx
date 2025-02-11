import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverView";
import { sampleBooks } from "@/constants";

const Home = async () => {
  return (
    <>
      {/* 首页借书预览 */}
      <BookOverView {...sampleBooks[0]} userId={"1"}></BookOverView>
      {/* 书籍列表 */}
      <BookList
        title="Latest Books"
        books={sampleBooks.slice(0)} // 截取从第1个到最后的数组列表
        containerClassName="mt-28"
      ></BookList>
    </>
  );
};

export default Home;
