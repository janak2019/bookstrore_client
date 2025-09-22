import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBorrowedBooks } from "../../store/slices/borrowSlice.js"; // create this thunk
import { BookOpen, ClipboardList } from "lucide-react";
import UserLayout from "../../layouts/UserLayout"; // similar to AdminLayout but for users

const UserDashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { borrowedBooks = [], loading, error } = useSelector(
    (state) => state.borrow
  );

  // Fetch this user's borrowed books
  useEffect(() => {
    if (user?._id) {
      dispatch(fetchUserBorrowedBooks(user._id));
    }
  }, [dispatch, user]);

  return (
    <UserLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name}</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <BookOpen className="text-blue-600 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Books Borrowed</h2>
            <p className="text-2xl font-bold">{loading ? "..." : borrowedBooks.length}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <ClipboardList className="text-green-600 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Returned</h2>
            <p className="text-2xl font-bold">
              {loading
                ? "..."
                : borrowedBooks.filter((b) => b.returned).length}
            </p>
          </div>
        </div>
      </div>

      {/* Borrowed Books Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">My Borrowed Books</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : borrowedBooks.length > 0 ? (
          <div className="overflow-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Book</th>
                  <th className="px-4 py-2 text-left">Borrowed Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowedBooks.map((borrow, index) => (
                  <tr
                    key={borrow._id}
                    className={(index + 1) % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{borrow.book?.title}</td>
                    <td className="px-4 py-2">
                      {new Date(borrow.borrowedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      {borrow.returned ? (
                        <span className="text-green-600 font-medium">Returned</span>
                      ) : (
                        <span className="text-red-600 font-medium">Borrowed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>You haven’t borrowed any books yet.</p>
        )}
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
