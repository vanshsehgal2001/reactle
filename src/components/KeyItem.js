import { useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const KeyItem = ({ val, flag, disabled, correct, partial }) => {
  const { attempts, onLetterClick, onDeleteClick, onEnterClick } =
    useContext(AppContext);
  const { attemptNo, letterPos } = attempts;

  const onclick = () => {
    if (attemptNo > 6) {
      return;
    }
    if (val === "Enter") {
      if (letterPos < 5) {
        return;
      }
      onEnterClick(val);
      return;
    }

    if (val === "Delete") {
      if (letterPos === 0) {
        return;
      }
      onDeleteClick(val);
      return;
    }
    onLetterClick(val);
  };

  return (
    <div
      className="key"
      id={
        flag
          ? "big"
          : disabled
          ? "disabled"
          : correct
          ? "correct"
          : partial && "partial"
      }
      onClick={onclick}
    >
      {val === "Delete" ? (
        <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faDeleteLeft} />
      ) : (
        val
      )}
    </div>
  );
};

export default KeyItem;
