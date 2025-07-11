import { CardNoBorder } from "@components";

export function Home() {
  return (
    <div className="">
      <div className={`bg-blur py-2`}>
        <div className="my-2">
          <div className="flex flex-col items-center gap-3 t sm:text-gray-900 my-2">
            <p className="font-bold text-xl">
              <strong className="font-extrabold text-2xl text-center text-yellow-700">
                Shoes Shop
              </strong>
              <br />
              The best place to buy shoes.
            </p>
            <p className="text-sm text-gray-700">
              Explore Our range of footwears
            </p>
          </div>
          {/* Filter */}
          <div className="flex justify-evenly items-center">
            <button className="bg-secondary hover:bg-yellow-600 p-2 flex gap-2 text-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.25 9.99989H6.895M2.534 9.99989H0.75M2.534 9.99989C2.534 9.42172 2.76368 8.86723 3.17251 8.4584C3.58134 8.04957 4.13583 7.81989 4.714 7.81989C5.29217 7.81989 5.84666 8.04957 6.25549 8.4584C6.66432 8.86723 6.894 9.42172 6.894 9.99989C6.894 10.5781 6.66432 11.1326 6.25549 11.5414C5.84666 11.9502 5.29217 12.1799 4.714 12.1799C4.13583 12.1799 3.58134 11.9502 3.17251 11.5414C2.76368 11.1326 2.534 10.5781 2.534 9.99989ZM19.25 16.6069H13.502M13.502 16.6069C13.502 17.1852 13.2718 17.7403 12.8628 18.1492C12.4539 18.5582 11.8993 18.7879 11.321 18.7879C10.7428 18.7879 10.1883 18.5572 9.77951 18.1484C9.37068 17.7396 9.141 17.1851 9.141 16.6069M13.502 16.6069C13.502 16.0286 13.2718 15.4745 12.8628 15.0655C12.4539 14.6566 11.8993 14.4269 11.321 14.4269C10.7428 14.4269 10.1883 14.6566 9.77951 15.0654C9.37068 15.4742 9.141 16.0287 9.141 16.6069M9.141 16.6069H0.75M19.25 3.39289H16.145M11.784 3.39289H0.75M11.784 3.39289C11.784 2.81472 12.0137 2.26023 12.4225 1.8514C12.8313 1.44257 13.3858 1.21289 13.964 1.21289C14.2503 1.21289 14.5338 1.26928 14.7983 1.37883C15.0627 1.48839 15.3031 1.64897 15.5055 1.8514C15.7079 2.05383 15.8685 2.29415 15.9781 2.55864C16.0876 2.82313 16.144 3.10661 16.144 3.39289C16.144 3.67917 16.0876 3.96265 15.9781 4.22714C15.8685 4.49163 15.7079 4.73195 15.5055 4.93438C15.3031 5.13681 15.0627 5.29739 14.7983 5.40695C14.5338 5.5165 14.2503 5.57289 13.964 5.57289C13.3858 5.57289 12.8313 5.34321 12.4225 4.93438C12.0137 4.52555 11.784 3.97106 11.784 3.39289Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
              <span className="hidden sm:inline">Filter</span>
            </button>
            <div className="hidden sm:w-24"></div>
            <div className="hidden sm:w-24"></div>
            <div className="hidden sm:w-24"></div>
            <div className="hidden sm:w-24"></div>
            <div className="flex items-center gap-1 font-bold text-secondary cursor-pointer">
              <span className="hidden sm:inline">Sort By</span>
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
        {/* First section with bg-image, 10 items */}
        <div
          className={`flex flex-wrap justify-center items-center bg-center gap-2`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <CardNoBorder key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
