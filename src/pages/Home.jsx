import React from "react";
import Layout from "../components/Layout";
import hero_img from "../assets/banner.png";
import book1 from "../assets/book-1.webp";
import book2 from "../assets/book-2.webp";
import book3 from "../assets/book-3.webp";
import book4 from "../assets/book-4.webp";
import book5 from "../assets/book-5.webp";
import book6 from "../assets/book-6.webp";
import Book from "../components/Book";

export default function Home() {
  const BOOKS = [
    {
      id: 1,
      image: book1,
      title: "The Shadow Sister",
      category: "Health",
      author: "Lucinda Riley",
      price: "$40",
    },
    {
      id: 2,
      image: book2,
      title: "Jade War",
      category: "Romance",
      author: "Fonda Lee",
      price: "$70.99",
    },
    {
      id: 3,
      image: book3,
      title: "Call Me By Your Name",
      category: "Biography",
      author: "Andre Aciman",
      price: "$58",
    },
    {
      id: 4,
      image: book4,
      title: "The Dinner Quest",
      category: "Food & Drink",
      author: "B.P. Walter",
      price: "$198",
    },
    {
      id: 5,
      image: book5,
      title: "Marauder",
      category: "Arts & Photography",
      author: "Clive Cussler and Boyd Morrison",
      price: "$34.55",
    },
    {
      id: 6,
      image: book6,
      title: "The Silmarillion",
      category: "Technology",
      author: "L.R.R Tolkien",
      price: "$44.84",
    },
  ];
  return (
    <Layout>
      <div className="hero py-32 bg-gray-700">
        <div className="hero-content grid md:grid-cols-2 gap-8">
          <div className="order-2">
            <img src={hero_img} className="" alt="Hero" />
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-normal text-white">
              Welcome to Cynthia Online Book Store
            </h1>
            <p className="py-6 text-gray-300">
              With us, you can shop online & help save your street at the same
              time. If you’re looking for great value second hand books, then
              World of Books is the place for you. As you may already know, we
              aren’t like other online book stores.
            </p>
            <button className="btn btn-primary mt-4">Explore Books</button>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOOKS.map((book) => (
            <Book
              key={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              category={book.category}
              price={book.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
