import { Button } from "@components";
import { Link, useNavigate } from "react-router-dom";

export const CartFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex justify-end my-2 ">
        <div className="flex flex-col">
          <div className="flex flex-col border-b-2 border-solid border-black my-2">
            <div className="flex gap-5 justify-between">
              <p>Sub Total</p>
              <p>N 40, 000</p>
            </div>
            <div className="flex justify-between">
              <p>V.A.T</p>
              <p>N 0.00</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <p>Total</p>
            <p>N 40, 000</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to={"/"} className="p-2 text-secondary">
          Continue Shopping
        </Link>
        <Button
          title={"Proceed to checkout"}
          onLClick={(_) => navigate("/checkout")}
        />
      </div>
    </div>
  );
};
