import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  loop?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => (prev + 1) % texts.length);
      }

      setTypingIndex((prev) => prev + 1);
    };

    const typingSpeedTime = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, typingSpeedTime);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingIndex, texts, typingSpeed, deletingSpeed, delay]);

  return <span>{text}</span>;
};

export default TypingEffect;
