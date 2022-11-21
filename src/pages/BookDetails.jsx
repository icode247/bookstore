import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import book1 from "../assets/book-1.webp";
import book2 from "../assets/book-2.webp";

const BookDetails = () => {
  return (
    <Layout>
      <div className="pb-">
        <div className="border-b py-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
            <h1 className="text-xl font-semibold text-black">Shop Single</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>Shop single</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
              <div className="carousel max-w-[400px] rounded-box">
                <div id="slide1" className="carousel-item relative">
                  <img
                    src={book1}
                    className="w-[400px] h-[500px] object-cover"
                    alt=""
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative">
                  <img
                    src={book2}
                    className="w-[400px] h-[500px] object-cover"
                    alt=""
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full mt-3 py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">
                  1
                </a>
                <a href="#slide2" className="btn btn-xs">
                  2
                </a>
              </div>
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="grid flex-shrink my-20">
              <div className="flex flex-col space-y-5 lg:pl-4">
                <h2 className="text-2xl text-black font-bold">
                  The Shadow Sister <div className="badge badge-secondary text-xs">Romance</div>
                </h2>
                <p className="text-lg">
                  <span className="text-black">By (author):</span> Lucinda Riley
                </p>
                <h3 className="text-black text-xl font-semibold">
                  $29.95 - 59.95
                </h3>
                <p>
                  <span className="text-black">Book Format:</span> PDF
                </p>
                <button type="button" className="btn btn-primary w-[200px]">
                  Add to Cart
                </button>
                {/* Tabs */}
                <div className="tabs pt-12">
                  <button
                    type="button"
                    className="tab tab-lg tab-lifted tab-active"
                  >
                    Description
                  </button>
                  <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                    Product Details
                  </button>
                  <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                    Vendor Info
                  </button>
                  <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                    Reviews
                  </button>
                </div>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
