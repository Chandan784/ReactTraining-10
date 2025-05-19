import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    return () => {
      console.log("unmounted ");
    };
  }, []);
  return <h1>footer</h1>;
}

export default Footer;
