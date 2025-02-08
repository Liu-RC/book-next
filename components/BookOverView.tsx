import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

interface Props extends Book {
  userId: string;
}

const BookOverView = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  color,
  cover,
  id,
  userId,
}: Props) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span>{author}</span>
          </p>
          <p>
            Category: <span>{genre}</span>
          </p>
          <Image
            src={"/icons/star.svg"}
            alt="star"
            width={22}
            height={22}
          ></Image>
          <p>{rating}/5</p>
        </div>
        <div className="book-copies">
          <p>
            Total books: <span>{totalCopies}</span>
          </p>
          <p>
            Available books: <span className="info">{availableCopies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
          <Image src={"/icons/book.svg"} alt="book" width={30} height={30} />
          <p className="font-bebas-neue text-xl text-dark-100">借书</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative ">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverView;
