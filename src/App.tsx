import "./App.css";

function App() {
  return (
    <section className="min-h-screen gap-10 flex flex-col items-center justify-center bg-main-color">
      <h1 className="font-display text-3xl font-semibold underline underline-offset-[1.2rem]">
        This is Home Screen
      </h1>

      <div className="flex gap-10 flex-wrap justify-center">
        <a
          href="https://monkeytype.com/"
          className="text-center text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                className="rounded-lg"
                src="https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com"
                alt="Monkeytype favicon"
              />
            </div>
            Monkeytype
          </div>
        </a>

        <a
          href="https://youtube.com/"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                className="rounded-lg"
                src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com"
                alt="Monkeytype favicon"
              />
            </div>
            Youtube
          </div>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png"
                alt="Gmail"
              />
            </div>
            Gmail
          </div>
        </a>

        <a
          href="https://mail.google.com/mail/u/1/#inbox"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png"
                alt="Gmail"
              />
            </div>
            Gmail
          </div>
        </a>

        <a
          href="https://www.twitch.tv/kyedae"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://www.google.com/s2/favicons?sz=64&domain=twitch.com"
                alt="Gmail"
              />
            </div>
            Twitch
          </div>
        </a>
        <a
          href="https://www.instagram.com/"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://www.google.com/s2/favicons?sz=64&domain=instagram.com"
                alt="Gmail"
              />
            </div>
            Instagram
          </div>
        </a>
        <a
          href="https://studio.youtube.com/channel/UC3V_KJjdJGp1Dh-NQBmfk3A/monetization"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com"
                alt="Gmail"
              />
            </div>
            Details
          </div>
        </a>

        <a
          href="https://translate.google.co.id/?hl=id"
          className="text-center size-32 text-sm hover:bg-[#e9e2d7] transition-all  p-5 rounded-md"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-[#f5f0e8] size-14 rounded-full overflow-hidden p-3">
              <img
                src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com"
                alt="Gmail"
              />
            </div>
            Google Translate
          </div>
        </a>
      </div>
    </section>
  );
}

export default App;
