import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          {/* Optional SVG Illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 mx-auto mb-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM12 4v8l4 2"
            />
          </svg>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring you something awesome. Stay tuned!
          </p>

          {/* Team Information */}
          <p className="text-md text-gray-500 mt-4">
            From Team Huddle Trading
          </p>
        </div>
      </div>
    </>
  );
}
