import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

/**
 * Types each string out, pauses, deletes it, moves to the next — looping.
 * The trailing `.caret` block is the brand's blinking indigo cursor
 * (styled in src/styles/portfolio.css).
 */
const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 90,
  deletingSpeed = 45,
  delay = 1600,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }

      setTypingIndex((prev) => prev + 1);
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, typingIndex]);

  return (
    <span>
      {text}
      <span className="caret" />
    </span>
  );
};

export default TypingEffect;
