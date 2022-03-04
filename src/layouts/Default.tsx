import Header from "./Header";
import Footer from "./Footer";

export function DefaultTemp(props) {
  return (
    <>
      <Header />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </>
  );
}
