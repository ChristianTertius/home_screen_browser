import { useState, useEffect } from "react";

const DynamicHeader = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format tanggal dalam bahasa Indonesia
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const formattedDate = now.toLocaleDateString("id-ID", options);
      setCurrentDate(formattedDate);

      // Tentukan greeting berdasarkan jam
      const hour = now.getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Evening");
      } else {
        setGreeting("Night");
      }
    };

    // Update immediately
    updateDateTime();

    // Update setiap menit
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 p-5 w-full flex justify-between z-10 items-center">
      <div className="flex gap-2 items-center">
        <div className="bg-[#ecdac4]/80 backdrop-blur-sm px-5 py-2 rounded-lg font-medium">
          {currentDate}
        </div>
        <div className="bg-[#ecdac4]/80 hover:bg-[#ecdac4] backdrop-blur-sm px-5 py-2 rounded-lg cursor-pointer relative group block sm:hidden">
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
            />
          </svg>

          {/* Tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Todolist
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
          </div>
        </div>
      </div>
      <h1 className="flex sm:gap-10 flex-wrap justify-center shadow-sm py-2 px-4 rounded-full text-white backdrop-blur-sm text-shadow-sm">
        🖐 Good {greeting} Christer
      </h1>
    </header>
  );
};

export default DynamicHeader;
