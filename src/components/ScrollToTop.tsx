import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => setIsVisable(window.scrollY > 200);

  const scrollToTop = () => window.scroll({ top: 0 });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return <div onClick={scrollToTop}>up</div>;
}

export default ScrollToTop;
