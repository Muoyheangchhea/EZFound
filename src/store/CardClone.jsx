import { Link } from "react-router-dom";
import FeedbackForm from "./Feedbackform";
import PremiumButton from "./SocailBtn";

// Helper function to detect Khmer text
const isKhmerText = (text) => {
  const khmerRegex = /[\u1780-\u17FF]/;
  return khmerRegex.test(text);
};

export let ProductCardClone = ({ images, title, id, description, day, category }) => {
  const khmerTitleClass = isKhmerText(title) ? "font-kh" : "font-pacifico";
  const khmerDescClass = isKhmerText(description) ? "font-kh" : "font-pacifico";

  return (
    <section className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="grid p-4 border border-gray-200 rounded-lg md:grid-cols-2 grid-cols-1 gap-6">
        <div className="col-span-1 relative grid gap-4">
          {/* Image with Category Tag */}
          <div className="relative">
            <img
              src={images}
              className="h-[200px] w-full object-cover rounded-md border border-gray-300 transition-transform duration-300 hover:scale-105"
              alt={title}
            />
            {/* Category Tag */}
            <span className="absolute top-2 left-2 bg-primary-300 text-black px-5 py-2 rounded-full text-sm font-pacifico font-bold shadow-md">
              {category}
            </span>
          </div>

          {/* Title & Description */}
          <div className="grid gap-2">
            <h1 className={`text-2xl font-bold text-gray-800 mb-6 ${khmerTitleClass}`}>{title}</h1>
            <p className={`text-gray-600 text-sm leading-relaxed ${khmerDescClass} line-clamp-2`}>
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <Link to={`/api/${id}`}>
              <button className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 focus:outline-none transition-all duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Open Day Design and Feedback */}
        <div className="grid gap-4 mt-3 p-4 bg-amber-50 rounded-md shadow-sm">
          <div className="flex justify-end text-gray-600">
            {/* Open Day */}
            <p className="text-sm font-bold bg-green-100 text-black font-pacifico px-4 py-1 rounded-full">
              Open Day: {day}
            </p>
          </div>

          {/* Comments Section */}
          <div className={khmerDescClass}>
            <h3 className=" text-gray-800 mb-2 font-pacifico text-[16px]">
              <span className="text-amber-600 font-pacifico font-bold">Comments:</span> Great Experience!
            </h3>

            {/* Rating Stars */}
            <div className="flex items-center mt-1">
              <span className="text-[16px] font-bold font-pacifico text-amber-600 mr-2">Ratings:</span>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <FeedbackForm shopename={title} />
        </div>
      </div>

      {/* Premium Button */}
      <PremiumButton />
    </section>
  );
};
