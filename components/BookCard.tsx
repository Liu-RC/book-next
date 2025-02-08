import React from "react";
import BookCover from "./BookCover";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-44 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col item-center")}
      >
        <BookCover coverColor={color} coverImage={cover} />
        <div className={cn("mt-4", "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
              />
              <p className="text-light-100">距离归还剩11天</p>
            </div>
            <Button className="book-btn">暂拒借阅</Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default BookCard;
