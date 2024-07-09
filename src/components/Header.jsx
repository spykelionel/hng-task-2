import { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    viewBox="0 0 18 14"
    fill="none"
    className="cursor-pointer md:hidden inline-block"
    {...props}
  >
    <path
      d="M1.5 6.99998H16.5M1.5 12.77H16.5M1.5 1.22998H16.5"
      stroke="#C80001"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
);

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-blur m-0 pt-5">
      <header
        className={`flex justify-between md:justify-center items-center align-center w-full gap-5 border-b-2 border-primary border-solid pb-2`}
      >
        <div className="flex mx-5">
          <Link to="/" className="flex space-evenly align-center">
            <h2 className="font-bold text-primary text-2xl text-nowrap">
              Body Shop
            </h2>
          </Link>
        </div>

        <nav className="hidden md:block mx-4 text-gray-800">
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
          <div className="hidden md:block relative w-full">
            <input
              type="text"
              id="text-search"
              className="bg-transparent border border-primary text-gray-900 text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pe-10 p-2.5 placeholder:text-primary"
              placeholder="Search Any Cos"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 me-2 text-primary font-bold"
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
          <div className="hidden md:flex">
            <Link to={"/cart"}>
              <div className="inline-flex gap-2 items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_292_3995)">
                    <path
                      d="M8.88672 21.333C9.71515 21.333 10.3867 20.6614 10.3867 19.833C10.3867 19.0046 9.71515 18.333 8.88672 18.333C8.05829 18.333 7.38672 19.0046 7.38672 19.833C7.38672 20.6614 8.05829 21.333 8.88672 21.333Z"
                      fill="white"
                    />
                    <path
                      d="M18 21.333C18.8284 21.333 19.5 20.6614 19.5 19.833C19.5 19.0046 18.8284 18.333 18 18.333C17.1716 18.333 16.5 19.0046 16.5 19.833C16.5 20.6614 17.1716 21.333 18 21.333Z"
                      fill="white"
                    />
                    <path
                      d="M15.0468 4.66634C15.0164 4.44541 15.0008 4.22269 15.0002 3.99967C15.0008 3.77666 15.0164 3.55394 15.0468 3.33301H7.66016L8.09349 4.66634H15.0468Z"
                      fill="white"
                    />
                    <path
                      d="M19.9998 8.99967H19.7198L18.8865 12.6663H8.8865L5.83983 3.01967C5.80688 2.9173 5.74965 2.82443 5.67303 2.74898C5.59641 2.67352 5.50268 2.61772 5.39983 2.58633L2.6665 1.74633C2.58245 1.72051 2.49414 1.71149 2.40661 1.71979C2.31908 1.72809 2.23404 1.75355 2.15635 1.79472C1.99944 1.87786 1.88199 2.01993 1.82983 2.18967C1.77767 2.3594 1.79508 2.54291 1.87822 2.69982C1.96136 2.85672 2.10342 2.97417 2.27316 3.02633L4.6665 3.75967L7.7265 13.4263L6.63316 14.3197L6.5465 14.4063C6.27605 14.718 6.12276 15.1142 6.11303 15.5267C6.10329 15.9393 6.23772 16.3423 6.49316 16.6663C6.67487 16.8873 6.90577 17.0627 7.16739 17.1784C7.42901 17.2942 7.71409 17.3471 7.99983 17.333H19.1265C19.3033 17.333 19.4729 17.2628 19.5979 17.1377C19.7229 17.0127 19.7932 16.8431 19.7932 16.6663C19.7932 16.4895 19.7229 16.32 19.5979 16.1949C19.4729 16.0699 19.3033 15.9997 19.1265 15.9997H7.89316C7.81639 15.997 7.7416 15.9747 7.676 15.9347C7.61041 15.8947 7.55622 15.8385 7.51869 15.7715C7.48116 15.7045 7.46155 15.6289 7.46175 15.5521C7.46195 15.4753 7.48195 15.3998 7.51983 15.333L9.1265 13.9997H19.4198C19.5739 14.0034 19.7246 13.9537 19.8461 13.8589C19.9677 13.7641 20.0526 13.6301 20.0865 13.4797L21.1332 8.873C20.7615 8.95831 20.3812 9.0008 19.9998 8.99967Z"
                      fill="white"
                    />
                    <path
                      d="M19.9998 7.33366C21.8408 7.33366 23.3332 5.84128 23.3332 4.00033C23.3332 2.15938 21.8408 0.666992 19.9998 0.666992C18.1589 0.666992 16.6665 2.15938 16.6665 4.00033C16.6665 5.84128 18.1589 7.33366 19.9998 7.33366Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_292_3995">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <MenuIcon onClick={(_) => setShowMenu(!showMenu)} />
      </header>
      {showMenu && (
        <div className="flex flex-col px-4 gap-2 ">
          <nav className="block px-1 text-gray-800">
            <ul className="flex flex-col justify-between gap-2">
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
          <div className="block relative w-full">
            <input
              type="text"
              id="text-search"
              className="bg-transparent border border-primary text-gray-900 text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pe-10 p-2.5 placeholder:text-primary"
              placeholder="Search Any Cos"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 me-2 text-primary font-bold"
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
          <div className="flex ">
            <Link to={"/cart"}>
              <div className="inline-flex gap-2 items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_292_3995)">
                    <path
                      d="M8.88672 21.333C9.71515 21.333 10.3867 20.6614 10.3867 19.833C10.3867 19.0046 9.71515 18.333 8.88672 18.333C8.05829 18.333 7.38672 19.0046 7.38672 19.833C7.38672 20.6614 8.05829 21.333 8.88672 21.333Z"
                      fill="white"
                    />
                    <path
                      d="M18 21.333C18.8284 21.333 19.5 20.6614 19.5 19.833C19.5 19.0046 18.8284 18.333 18 18.333C17.1716 18.333 16.5 19.0046 16.5 19.833C16.5 20.6614 17.1716 21.333 18 21.333Z"
                      fill="white"
                    />
                    <path
                      d="M15.0468 4.66634C15.0164 4.44541 15.0008 4.22269 15.0002 3.99967C15.0008 3.77666 15.0164 3.55394 15.0468 3.33301H7.66016L8.09349 4.66634H15.0468Z"
                      fill="white"
                    />
                    <path
                      d="M19.9998 8.99967H19.7198L18.8865 12.6663H8.8865L5.83983 3.01967C5.80688 2.9173 5.74965 2.82443 5.67303 2.74898C5.59641 2.67352 5.50268 2.61772 5.39983 2.58633L2.6665 1.74633C2.58245 1.72051 2.49414 1.71149 2.40661 1.71979C2.31908 1.72809 2.23404 1.75355 2.15635 1.79472C1.99944 1.87786 1.88199 2.01993 1.82983 2.18967C1.77767 2.3594 1.79508 2.54291 1.87822 2.69982C1.96136 2.85672 2.10342 2.97417 2.27316 3.02633L4.6665 3.75967L7.7265 13.4263L6.63316 14.3197L6.5465 14.4063C6.27605 14.718 6.12276 15.1142 6.11303 15.5267C6.10329 15.9393 6.23772 16.3423 6.49316 16.6663C6.67487 16.8873 6.90577 17.0627 7.16739 17.1784C7.42901 17.2942 7.71409 17.3471 7.99983 17.333H19.1265C19.3033 17.333 19.4729 17.2628 19.5979 17.1377C19.7229 17.0127 19.7932 16.8431 19.7932 16.6663C19.7932 16.4895 19.7229 16.32 19.5979 16.1949C19.4729 16.0699 19.3033 15.9997 19.1265 15.9997H7.89316C7.81639 15.997 7.7416 15.9747 7.676 15.9347C7.61041 15.8947 7.55622 15.8385 7.51869 15.7715C7.48116 15.7045 7.46155 15.6289 7.46175 15.5521C7.46195 15.4753 7.48195 15.3998 7.51983 15.333L9.1265 13.9997H19.4198C19.5739 14.0034 19.7246 13.9537 19.8461 13.8589C19.9677 13.7641 20.0526 13.6301 20.0865 13.4797L21.1332 8.873C20.7615 8.95831 20.3812 9.0008 19.9998 8.99967Z"
                      fill="white"
                    />
                    <path
                      d="M19.9998 7.33366C21.8408 7.33366 23.3332 5.84128 23.3332 4.00033C23.3332 2.15938 21.8408 0.666992 19.9998 0.666992C18.1589 0.666992 16.6665 2.15938 16.6665 4.00033C16.6665 5.84128 18.1589 7.33366 19.9998 7.33366Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_292_3995">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
