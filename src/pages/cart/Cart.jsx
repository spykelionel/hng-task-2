import { CartFooter, CartHeader, CartItem } from "./components";

export function Cart() {
  return (
    <div className="p-10">
      <CartHeader />
      {Array.from({ length: 4 }).map((_, index) => (
        <CartItem key={index} />
      ))}
      <CartFooter />
    </div>
  );
}
