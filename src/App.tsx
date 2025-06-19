import "./App.css";
import { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import VantaBackground from "./components/VantaBackground";
import DynamicHeader from "./DynamicHeader";
import LinksGrid from "./components/LinksGrid";
// @ts-ignore
import { getImageUrls } from "./links";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello Christian";

  // Typing effect for the loading screen
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start fading after typing is complete
        setTimeout(() => {
          setIsFading(true);
          // Remove loading screen after fade-out duration
          setTimeout(() => {
            setIsLoading(false);
          }, 500); // Match the CSS transition duration
        }, 500); // Brief pause after typing
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Preload images
  useEffect(() => {
    const imageUrls = getImageUrls();

    const preloadImages = async () => {
      try {
        // @ts-ignore
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        });
        await Promise.all(imagePromises);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-white text-3xl font-medium">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>
      )}

      {/* Main Content - Always rendered, opacity controlled */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
      >
        <VantaBackground />

        <section className="min-h-screen gap-10 flex flex-col items-center justify-center font-display relative">
          <TodoList />
          <div className="bg-black/10 w-full h-full fixed"></div>
          <DynamicHeader />
          <div className="flex sm:gap-10 flex-wrap justify-center shadow-sm py-2 px-4 rounded-full backdrop-blur-sm text-shadow-sm text-shadow-white/10">
            <h1 className="font-display text-2xl font-semibold">
              This is Home Screen
            </h1>
          </div>

          {/* LinksGrid component */}
          <LinksGrid />

          <footer className="font-medium fixed w-full bottom-0 text-center py-2 px-5 text-white">
            Created by Christer 💘
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
