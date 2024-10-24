import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
}
export default useScrollToHash;
