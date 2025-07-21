import { useEffect, useState } from "react";

export const Keypad = () => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const fetchLetters = async () => {
      const response = await fetch("/mock/db.json");
      const data = await response.json();
      setLetters(data.letters.map((letter: { key: string }) => letter.key));
    };

    fetchLetters();
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter, index) => <div key={index}>{letter}</div>)}
    </div>
  );
};
