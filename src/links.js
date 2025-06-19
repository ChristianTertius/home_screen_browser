export const linksData = [
  {
    id: 1,
    name: "Monkeytype",
    url: "https://monkeytype.com/",
    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com",
    alt: "Monkeytype favicon",
  },
  {
    id: 2,
    name: "Youtube",
    url: "https://youtube.com/",
    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
    alt: "Youtube favicon",
  },
  {
    id: 3,
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0/#inbox",
    iconUrl:
      "https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png",
    alt: "Gmail",
  },
  {
    id: 4,
    name: "Gmail 2",
    url: "https://mail.google.com/mail/u/1/#inbox",
    iconUrl:
      "https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png",
    alt: "Gmail",
  },
  {
    id: 5,
    name: "Twitch",
    url: "https://www.twitch.tv/kyedae",
    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=twitch.com",
    alt: "Twitch",
  },
  {
    id: 6,
    name: "Instagram",
    url: "https://www.instagram.com/",
    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=instagram.com",
    alt: "Instagram",
  },
  {
    id: 7,
    name: "Details",
    url: "https://studio.youtube.com/channel/UC3V_KJjdJGp1Dh-NQBmfk3A/monetization",
    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
    alt: "YouTube Studio",
  },
  {
    id: 8,
    name: "Google Translate",
    url: "https://translate.google.co.id/?hl=id",
    iconUrl:
      "https://www.google.com/s2/favicons?sz=64&domain=translate.google.com",
    alt: "Google Translate",
  },
];

// Untuk mendapatkan semua URL gambar (untuk preloading)
export const getImageUrls = () => {
  return linksData.map((link) => link.iconUrl);
};
