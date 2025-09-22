import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../../store/slices/bookSlice";
import { fetchAllBorrowedBooks } from "../../store/slices/borrowSlice";
import { toast } from "react-toastify";
import { Users, BookOpen, ClipboardList } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { books, loading: bookLoading, error: bookError } = useSelector(
    (state) => state.book
  );
  const {
    borrowedBooks,
    loading: borrowLoading,
    error: borrowError,
  } = useSelector((state) => state.borrow);
  const { allUsers = [], user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Fetch data on mount
  useEffect(() => {
    if (isAuthenticated && user?.role === "Admin") {
      dispatch(fetchAllBooks());
      dispatch(fetchAllBorrowedBooks());
      // dispatch(fetchAllUsers()) // if you have users API
    }
  }, [dispatch, isAuthenticated, user]);

  // Handle errors
  useEffect(() => {
    if (bookError) toast.error(bookError);
    if (borrowError) toast.error(borrowError);
  }, [bookError, borrowError]);

  // Stats
  const totalBooks = books?.length || 0;
  const totalBorrowed = borrowedBooks?.length || 0;
  const totalUsers = allUsers?.length || 0;

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <Users className="text-purple-600 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">
              {isAuthenticated ? totalUsers : "..."}
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <BookOpen className="text-blue-600 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Books Available</h2>
            <p className="text-2xl font-bold">
              {bookLoading ? "..." : totalBooks}
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <ClipboardList className="text-green-600 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Borrowed Books</h2>
            <p className="text-2xl font-bold">
              {borrowLoading ? "..." : totalBorrowed}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Borrowed Books */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Borrowed Books</h3>
        {borrowedBooks && borrowedBooks.length > 0 ? (
          <div className="overflow-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Book</th>
                  <th className="px-4 py-2 text-left">Borrower</th>
                  <th className="px-4 py-2 text-left">Borrowed Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowedBooks.slice(0, 5).map((borrow, index) => (
                  <tr
                    key={borrow._id}
                    className={(index + 1) % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{borrow.book?.title}</td>
                    <td className="px-4 py-2">{borrow.user?.name}</td>
                    <td className="px-4 py-2">
                      {new Date(borrow.borrowedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      {borrow.returned ? (
                        <span className="text-green-600 font-medium">
                          Returned
                        </span>
                      ) : (
                        <span className="text-red-600 font-medium">
                          Borrowed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4">No borrowed books yet.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
