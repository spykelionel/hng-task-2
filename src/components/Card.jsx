import shoe from "@assets/images/shoe.png";
import { Button } from "@components";
import { useNavigate } from "react-router-dom";

export function Card() {
  const StarSvg = (_) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      className="cursor-pointer"
    >
      <path
        d="M3.32489 14.9231L4.56489 9.61013L0.441895 6.03813L5.87289 5.56813L7.99989 0.557129L10.1269 5.56713L15.5569 6.03713L11.4339 9.60913L12.6749 14.9221L7.99989 12.1021L3.32489 14.9231Z"
        fill="#C80001"
      />
    </svg>
  );

  const shoeUrl =
    "https://m.media-amazon.com/images/I/81p5Z19wJtL._AC_SX625_.jpg";
  return (
    <div className="bg-white w-64 border shadow-md rounded-br-xl rounded-bl-xl m-2 flex flex-col gap-3">
      <div className="p-2 rounded-br-xl rounded-bl-xl border bg-tertiary">
        <img src={shoe} alt="Image" className="bg-transparent" />
      </div>
      <div className="flex justify-between items-center m-2">
        <div className="flex flex-col gap-2">
          <p className="">Black Shoe</p>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarSvg key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="">N 242, 00</p>
          <Button title={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
}

export function CardNoBorder() {
  const navigate = useNavigate();
  const StarSvg = (_) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 16 15"
      fill="none"
      className="cursor-pointer"
    >
      <path
        d="M3.32489 14.9231L4.56489 9.61013L0.441895 6.03813L5.87289 5.56813L7.99989 0.557129L10.1269 5.56713L15.5569 6.03713L11.4339 9.60913L12.6749 14.9221L7.99989 12.1021L3.32489 14.9231Z"
        fill="#C80001"
      />
    </svg>
  );

  const shoeUrl =
    "https://m.media-amazon.com/images/I/81p5Z19wJtL._AC_SX625_.jpg";
  return (
    <div className="bg-white w-[70%] sm:w-64 rounded-br-xl rounded-bl-xl mx-0 sm:m-2 flex flex-col gap-3">
      <div className="p-2 rounded-br-xl rounded-bl-xl border bg-tertiary">
        <img src={shoe} alt="Image" className="bg-transparent" />
      </div>
      <div className="flex justify-between items-center m-2">
        <div className="flex flex-col gap-2">
          <p className="">Black Shoe</p>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarSvg key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
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
            <span>242, 00</span>
          </p>
          <Button onClick={(_) => navigate("/cart")} title={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
}
