import React, { useRef } from "react";
import { useGlobalContext } from "./Context";
export default function InputField() {
  const { setSearchText } = useGlobalContext();
  const inputRef = useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="InputField show">
      <label htmlFor="inp">search your favorite cocktail</label>
      <input
        type="text"
        ref={inputRef}
        name="inp"
        id="inp"
        onChange={(e) => {
          setSearchText(inputRef.current.value);
        }}
      />
    </div>
  );
}
