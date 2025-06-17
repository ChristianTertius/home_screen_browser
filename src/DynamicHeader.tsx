import React, { useState, useEffect } from "react";

const DynamicHeader = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format tanggal dalam bahasa Indonesia
      const options = {
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
    <header className="fixed top-0 p-5 w-full flex justify-between bg-[#f0e7db] z-10 items-center">
      <div className="bg-[#ecdac4] px-5 py-2 rounded-lg font-medium">
        {currentDate}
      </div>
      <h1 className="text-right font-semibold text-lg">
        🖐 Good {greeting} Christer
      </h1>
    </header>
  );
};

export default DynamicHeader;
