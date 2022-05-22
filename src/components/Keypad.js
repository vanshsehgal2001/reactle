import { useEffect, useCallback, useContext } from "react";
import { row1, row2, row3 } from "../keys";
import KeyItem from "../components/KeyItem";
import { AppContext } from "../App";

const Keypad = () => {
  const {
    attempts,
    onLetterClick,
    onDeleteClick,
    onEnterClick,
    disabledKeys,
    correctKeys,
    partialKeys,
  } = useContext(AppContext);
  const { letterPos } = attempts;

  const handleKeyboardClick = useCallback((e) => {
    if (e.key === "Enter") {
      if (letterPos < 5) {
        return;
      }
      onEnterClick();
    } else if (e.key === "Backspace") {
      if (letterPos === 0) {
        return;
      }
      onDeleteClick();
    } else {
      row1.map((item) => {
        if (e.key.toLowerCase() === item.toLowerCase()) {
          onLetterClick(item);
          return;
        }
      });
      row2.map((item) => {
        if (e.key.toLowerCase() === item.toLowerCase()) {
          onLetterClick(item);
          return;
        }
      });
      row3.map((item) => {
        if (e.key.toLowerCase() === item.toLowerCase()) {
          onLetterClick(item);
          return;
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("keydown", handleKeyboardClick);
    };
  }, [handleKeyboardClick]);

  return (
    <div className="keypad" onKeyDown={handleKeyboardClick}>
      <div className="row1">
        {row1.map((item) => {
          return (
            <KeyItem
              val={item}
              key={item}
              disabled={disabledKeys.includes(item)}
              correct={correctKeys.includes(item)}
              partial={partialKeys.includes(item)}
            />
          );
        })}
      </div>
      <div className="row2">
        {row2.map((item) => {
          return (
            <KeyItem
              key={item}
              val={item}
              disabled={disabledKeys.includes(item)}
              correct={correctKeys.includes(item)}
              partial={partialKeys.includes(item)}
            />
          );
        })}
      </div>
      <div className="row3">
        <KeyItem val={"Enter"} flag />
        {row3.map((item) => {
          return (
            <KeyItem
              key={item}
              val={item}
              disabled={disabledKeys.includes(item)}
              correct={correctKeys.includes(item)}
              partial={partialKeys.includes(item)}
            />
          );
        })}
        <KeyItem val={"Delete"} flag />
      </div>
    </div>
  );
};

export default Keypad;
