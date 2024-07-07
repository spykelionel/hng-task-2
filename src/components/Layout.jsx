import { Footer, Header } from "@components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-[url(https://s3-alpha-sig.figma.com/img/6407/8abc/4069b8460a6c268b0a05b5b3828424f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dF9pqKPR3cOmXMlXsk3b7UcO~UIygqJ5PYmt7hbwsYNQOcO8RomGWiwr0SB-XrH8ib2YeyslEq-V86YqyBpdbPct1K~lFtwPguEPxrFBY6qDBibtUFzPUNgdXUOPvW-8~riQ38INNjOkmeU8ARKVRxHqio0ZQCMWqF92SV7H~HEyS6G2j08Nwbw9lGmiKQbYdoUgDM6mybmRF9WrJPN1iCliFOUsKV0dcgDEe4ukxKchS8fY32WqCuElo68tAYBQSSfunx7CJyWOmFZincGg~tvVuAgv9S17aX594Q0JnQ-OlunuCYXtOQzGZvj~0ADcXEk-hxrf2ZxZqG~4lrSEKQ__)]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
