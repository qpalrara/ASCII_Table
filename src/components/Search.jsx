import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      className="border border-gray-400 p-2 float-right rounded-xl"
      value={query}
      onChange={(e) => {
        const text = e.target.value;
        setQuery(text);
        const result = document.getElementById(text.codePointAt(0));
        result.classList.add("border-box", "border-2", "border-red-400");
        setTimeout(() => {
          result.classList.remove("border-box", "border-2", "border-red-400");
        }, 1000);
      }}
      maxLength={1}
    />
  );
}
