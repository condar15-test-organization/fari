import { useRef, useState } from "react";
export function useNumber(max: number) {
  const [value, setValue] = useState<number>(undefined);
  const isRolling = useRef(false);
  const rollAnimationCount = 30;
  function roll(count = 0) {
    if (isRolling.current && count === 0) {
      return;
    }
    isRolling.current = true;
    const number = getRandomNumber();
    setValue(number);
    if (count !== rollAnimationCount) {
      setTimeout(() => {
        roll(count + 1);
      }, 50);
    } else {
      isRolling.current = false;
    }
  }
  function getRandomNumber() {
    return Math.ceil((Math.random() * 100) % max);
  }
  return {
    value,
    roll
  };
}
