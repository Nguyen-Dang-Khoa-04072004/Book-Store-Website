import Breadcums from "../components/breadcums/Breadcums";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function ProductLayout({ children }) {
  return (
    <>
      <Header />
      <Breadcums />
      <main className="h-screen">{children}</main>
      <Footer />
    </>
  );
}
