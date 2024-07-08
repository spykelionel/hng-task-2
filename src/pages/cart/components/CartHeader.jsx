export const CartHeader = () => {
  return (
    <div className="flex justify-between  my-2 ">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-lg">Shopping Cart</h1>
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
  );
};
