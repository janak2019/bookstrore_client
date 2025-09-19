import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = (apiBase) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("apiBase/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter books based on title, author, or publication
  const filteredBooks = books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title?.toLowerCase().includes(term) ||
      book.author?.toLowerCase().includes(term) ||
      book.publication?.toLowerCase().includes(term)
    );
  });

  return (
    <>
      
      <div className="container mx-auto px-4 py-6 ">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">
          📚 Total Books: {filteredBooks.length}
        </h2>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by title, author, or publication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id || index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Book Cover Image */}
              <img
                src={book.image || `https://picsum.photos/300/200?random=${index}`}
                alt={book.title}
                className="w-full h-40 object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {book.author || "Unknown Author"} · {book.publication || "N/A"}
                </p>
                <p className="text-gray-700 line-clamp-3">{book.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
