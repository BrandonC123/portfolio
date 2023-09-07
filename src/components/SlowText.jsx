import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const SlowText = ({ text, speed }) => {
  const [placeholder, setPlaceholder] = useState(text[0]);

  const index = useRef(0);

  useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev) => prev + text[index.current]);
    }
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, text]);
  const lines = placeholder.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

  return <>{lines}</>;
};

export default SlowText;
