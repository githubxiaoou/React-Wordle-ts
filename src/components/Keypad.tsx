import { useEffect, useState } from "react";
import type { LetterColor } from "../hooks/useWordle";

type KeypadProps = {
  usedKeys: { [key: string]: LetterColor }; // to track used keys and their colors
};

export const Keypad = ({ usedKeys }: KeypadProps) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const fetchLetters = async () => {
      const response = await fetch(import.meta.env.BASE_URL + "mock/db.json");
      const data = await response.json();
      setLetters(data.letters.map((letter: { key: string }) => letter.key));
    };

    fetchLetters();
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter, index) => {
          const color = usedKeys[letter];
          return (
            <div key={index} className={color}>
              {letter}
            </div>
          );
        })}
    </div>
  );
};
