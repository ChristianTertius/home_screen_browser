// @ts-ignore
import { linksData } from "../links";

const LinksGrid = () => {
  return (
    <div className="flex sm:gap-10 flex-wrap justify-center shadow-sm p-5 rounded-lg backdrop-blur-sm text-shadow-sm text-shadow-white/10">
      {linksData.map((link: any) => (
        <a
          key={link.id}
          href={link.url}
          className={`text-center text-white text-sm hover:bg-[#e9e2d7]/20 transition-all p-5 rounded-md ${
            link.id === 1 ? "" : "size-32"
          }`}
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="bg-gray-950/80 size-14 rounded-full overflow-hidden p-3">
              <img className="rounded-lg" src={link.iconUrl} alt={link.alt} />
            </div>
            {link.name}
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinksGrid;
