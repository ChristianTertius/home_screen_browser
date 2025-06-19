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
      <div className="bg-[#ecdac4]/80 backdrop-blur-sm px-5 py-2 rounded-lg font-medium">
        {currentDate}
      </div>
      <h1 className="flex sm:gap-10 flex-wrap justify-center shadow-sm py-2 px-4 rounded-full text-white backdrop-blur-sm text-shadow-sm">
        🖐 Good {greeting} Christer
      </h1>
    </header>
  );
};

export default DynamicHeader;
