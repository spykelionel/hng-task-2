import { Footer, Header } from "@components";

export function NotFound() {
  return (
    <>
      <Header />
      <div className="grid place-content-center text-primary">
        <p className="text-2xl font-bold ">Page Not Found</p>
        <p className="text-2xl font-bold">404</p>
      </div>
      <Footer />
    </>
  );
}
