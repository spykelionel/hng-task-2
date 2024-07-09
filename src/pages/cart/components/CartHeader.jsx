import { Link } from "react-router-dom";

export const CartHeader = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center my-5">
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M8.75 18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H8.75C8.41848 21.25 8.10054 21.1183 7.86612 20.8839C7.6317 20.6495 7.5 20.3315 7.5 20C7.5 19.6685 7.6317 19.3505 7.86612 19.1161C8.10054 18.8817 8.41848 18.75 8.75 18.75Z"
              fill="black"
            />
            <path
              d="M9.26729 19.9996L19.6348 30.3646C19.8695 30.5993 20.0014 30.9177 20.0014 31.2496C20.0014 31.5816 19.8695 31.8999 19.6348 32.1346C19.4001 32.3693 19.0817 32.5012 18.7498 32.5012C18.4179 32.5012 18.0995 32.3693 17.8648 32.1346L6.61479 20.8846C6.49838 20.7685 6.40603 20.6306 6.34301 20.4787C6.28 20.3268 6.24756 20.164 6.24756 19.9996C6.24756 19.8352 6.28 19.6724 6.34301 19.5205C6.40603 19.3687 6.49838 19.2307 6.61479 19.1146L17.8648 7.86463C18.0995 7.62991 18.4179 7.49805 18.7498 7.49805C19.0817 7.49805 19.4001 7.62991 19.6348 7.86463C19.8695 8.09934 20.0014 8.41769 20.0014 8.74963C20.0014 9.08157 19.8695 9.39991 19.6348 9.63463L9.26729 19.9996Z"
              fill="black"
            />
          </svg>
        </Link>
        <h1 className="font-bold text-lg">Shopping Cart</h1>
        <div className="w-2"></div>
      </div>
      <div className="flex justify-between  my-2 ">
        <div className="flex flex-col gap-1 my-3">
          <p>You have four items in your cart!</p>
        </div>
        <div className="flex items-center gap-1 font-bold text-secondary cursor-pointer">
          <span>Sort By</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M5.35351 3.52579L7.82808 1.05122L8.53568 1.75832L4.99996 5.29321L1.46423 1.75832L2.17183 1.05122L4.6464 3.52579L4.99996 3.87935L5.35351 3.52579Z"
              fill="black"
              stroke="#F08000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
