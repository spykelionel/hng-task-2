export const Header = () => {
  const bgString =
    "bg-[url(https://s3-alpha-sig.figma.com/img/6407/8abc/4069b8460a6c268b0a05b5b3828424f7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dF9pqKPR3cOmXMlXsk3b7UcO~UIygqJ5PYmt7hbwsYNQOcO8RomGWiwr0SB-XrH8ib2YeyslEq-V86YqyBpdbPct1K~lFtwPguEPxrFBY6qDBibtUFzPUNgdXUOPvW-8~riQ38INNjOkmeU8ARKVRxHqio0ZQCMWqF92SV7H~HEyS6G2j08Nwbw9lGmiKQbYdoUgDM6mybmRF9WrJPN1iCliFOUsKV0dcgDEe4ukxKchS8fY32WqCuElo68tAYBQSSfunx7CJyWOmFZincGg~tvVuAgv9S17aX594Q0JnQ-OlunuCYXtOQzGZvj~0ADcXEk-hxrf2ZxZqG~4lrSEKQ__)]";
  return (
    <>
      <header
        className={`flex justify-center items-center align-center w-full gap-5 py-5 ${bgString} bg-fit`}
      >
        <div className="flex mx-5">
          <a href="#" className="flex space-evenly align-center">
            <h2 className="font-bold text-primary text-2xl">Body Shop</h2>
          </a>
        </div>

        <nav className="mx-4 text-gray-800">
          <ul className="flex justify-between gap-4">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Wears</a>
            </li>
            <li className="">
              <a href="#" className="text-primary">
                Shoes
              </a>
            </li>
            <li className="">
              <a href="#">Bags</a>
            </li>
            <li className="">
              <a href="#" className="">
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center mx">
          <div className="relative w-full">
            <input
              type="text"
              id="text-search"
              className="bg-transparent border border-white text-gray-900 text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pe-10 p-2.5 placeholder:text-white"
              placeholder="Search Any Cos"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 me-2 text-white font-bold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="inline-flex gap-2 items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full border border-primary dark:hover:bg-primary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M16.6875 3.875C14.8041 3.875 13.1325 4.61844 12 5.89625C10.8675 4.61844 9.19594 3.875 7.3125 3.875C5.67208 3.87698 4.09942 4.52952 2.93947 5.68947C1.77952 6.84942 1.12698 8.42208 1.125 10.0625C1.125 16.8444 11.0447 22.2631 11.4666 22.4909C11.6305 22.5792 11.8138 22.6254 12 22.6254C12.1862 22.6254 12.3695 22.5792 12.5334 22.4909C12.9553 22.2631 22.875 16.8444 22.875 10.0625C22.873 8.42208 22.2205 6.84942 21.0605 5.68947C19.9006 4.52952 18.3279 3.87698 16.6875 3.875ZM16.1728 17.2213C14.8671 18.3292 13.4714 19.3264 12 20.2025C10.5286 19.3264 9.13287 18.3292 7.82719 17.2213C5.79562 15.4784 3.375 12.8206 3.375 10.0625C3.375 9.01821 3.78984 8.01669 4.52827 7.27827C5.26669 6.53984 6.26821 6.125 7.3125 6.125C8.98125 6.125 10.3781 7.00625 10.9584 8.42562C11.0429 8.63254 11.1871 8.80961 11.3726 8.93425C11.5581 9.05889 11.7765 9.12545 12 9.12545C12.2235 9.12545 12.4419 9.05889 12.6274 8.93425C12.8129 8.80961 12.9571 8.63254 13.0416 8.42562C13.6219 7.00625 15.0188 6.125 16.6875 6.125C17.7318 6.125 18.7333 6.53984 19.4717 7.27827C20.2102 8.01669 20.625 9.01821 20.625 10.0625C20.625 12.8206 18.2044 15.4784 16.1728 17.2213Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="inline-flex gap-2 items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full border border-primary dark:hover:bg-primary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M16 16.5C16.5304 16.5 17.0391 16.7107 17.4142 17.0858C17.7893 17.4609 18 17.9696 18 18.5C18 19.0304 17.7893 19.5391 17.4142 19.9142C17.0391 20.2893 16.5304 20.5 16 20.5C15.4696 20.5 14.9609 20.2893 14.5858 19.9142C14.2107 19.5391 14 19.0304 14 18.5C14 17.39 14.89 16.5 16 16.5ZM0 0.5H3.27L4.21 2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20 3.67 19.95 3.84 19.88 4L16.3 10.47C15.96 11.08 15.3 11.5 14.55 11.5H7.1L6.2 13.13L6.17 13.25C6.17 13.3163 6.19634 13.3799 6.24322 13.4268C6.29011 13.4737 6.3537 13.5 6.42 13.5H18V15.5H6C5.46957 15.5 4.96086 15.2893 4.58579 14.9142C4.21071 14.5391 4 14.0304 4 13.5C4 13.15 4.09 12.82 4.24 12.54L5.6 10.09L2 2.5H0V0.5ZM6 16.5C6.53043 16.5 7.03914 16.7107 7.41421 17.0858C7.78929 17.4609 8 17.9696 8 18.5C8 19.0304 7.78929 19.5391 7.41421 19.9142C7.03914 20.2893 6.53043 20.5 6 20.5C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5C4 17.39 4.89 16.5 6 16.5ZM15 9.5L17.78 4.5H5.14L7.5 9.5H15Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};
