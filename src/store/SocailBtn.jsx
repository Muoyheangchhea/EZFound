import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

const PremiumButton = ({ id }) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (!accessToken) {
      // If not logged in, navigate to login page
      navigate("/login");
    } else {
      // User is logged in, perform the action (e.g., navigate to premium content)
      console.log(
        "User is logged in. Proceeding to premium content or action."
      );
      navigate(`/premium/${id}`); // Example action; change to your actual logic
    }
  };

  return (
    <div className="absolute bottom-0 right-10 md:flex mb-10 rounded-lg flex flex-col">
      <button
        onClick={handleSubmit}
        className="flex border-2 border-yellow-600 rounded-full px-5 py-2 text-black gap-1 hover:bg-yellow-500"
      >
          Contact Owner
      </button>
    </div>
  );
};

export default PremiumButton;
