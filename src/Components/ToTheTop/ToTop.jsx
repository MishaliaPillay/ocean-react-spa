import { useEffect, useState } from "react";
import "./ToTop.css";
import { ArrowUp } from "@phosphor-icons/react";

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <div className="button-content">
            <span>Top</span>
            <ArrowUp size={32} />
          </div>
        </button>
      )}
    </>
  );
};

export default ToTop;
