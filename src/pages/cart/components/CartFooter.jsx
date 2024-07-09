import { Link, useNavigate } from "react-router-dom";

export const CartFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-2 ">
        <div className="flex flex-col gap-2">
          <p>Sub Total</p>
          <p>V.A.T</p>
          <p className="font-bold">Total</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="flex items-center gap-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
              >
                <path
                  d="M0 5.25H1.5V0.75H3L5.565 5.25H9V0.75H10.5V5.25H12V6.75H10.5V8.25H12V9.75H10.5V14.25H9L6.4275 9.75H3V14.25H1.5V9.75H0V8.25H1.5V6.75H0V5.25ZM3 5.25H3.8475L3 3.7725V5.25ZM3 6.75V8.25H5.565L4.71 6.75H3ZM9 11.25V9.75H8.1375L9 11.25ZM6.42 6.75L7.2825 8.25H9V6.75H6.42Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>242, 00</span>
          </p>
          <p className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
              >
                <path
                  d="M0 5.25H1.5V0.75H3L5.565 5.25H9V0.75H10.5V5.25H12V6.75H10.5V8.25H12V9.75H10.5V14.25H9L6.4275 9.75H3V14.25H1.5V9.75H0V8.25H1.5V6.75H0V5.25ZM3 5.25H3.8475L3 3.7725V5.25ZM3 6.75V8.25H5.565L4.71 6.75H3ZM9 11.25V9.75H8.1375L9 11.25ZM6.42 6.75L7.2825 8.25H9V6.75H6.42Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>0. 00</span>
          </p>
          <p className="flex items-center gap-1 font-bold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
              >
                <path
                  d="M0 5.25H1.5V0.75H3L5.565 5.25H9V0.75H10.5V5.25H12V6.75H10.5V8.25H12V9.75H10.5V14.25H9L6.4275 9.75H3V14.25H1.5V9.75H0V8.25H1.5V6.75H0V5.25ZM3 5.25H3.8475L3 3.7725V5.25ZM3 6.75V8.25H5.565L4.71 6.75H3ZM9 11.25V9.75H8.1375L9 11.25ZM6.42 6.75L7.2825 8.25H9V6.75H6.42Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>242, 00</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to={"/"} className="py-2 text-secondary">
          Continue Shopping
        </Link>
        <Link
          to={"/checkout"}
          className="text-white bg-secondary p-3 rounded-lg"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
};
