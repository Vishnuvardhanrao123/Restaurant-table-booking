import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { message } from "antd";
import firebase from "../firebase/firebaseconfig/firbase_config";
import { auth } from "../firebase/firebaseconfig/firbase_config";

  const UserProfile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      message.success("You have logged out!");
      navigate("/signup");
    } catch (error) {
      console.error("Error during logout:", error);
      message.error("An error occurred during logout.");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User Profile
        </h1>

        <div className="mb-4">
          <p className="text-orange-500 text-center text-sm">
            Email: {user.email}
          </p>
        </div>

        {user && (
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
