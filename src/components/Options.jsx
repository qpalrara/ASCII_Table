import { useState } from "react";

export default function Options({ options, setOptions }) {
  const optionList = [
    "OCT",
    "HEX",
    "BIN",
    "Symbol",
    "HTML Number",
    "HTML Name",
    "Description",
  ].map((name, idx) => (
    <Option
      key={name}
      name={name}
      idx={idx}
      setOptions={setOptions}
      initial={options.includes(idx)}
    />
  ));
  return <div className="float-left mt-4">{optionList}</div>;
}

function Option({ name, idx, setOptions, initial }) {
  const [checked, setChecked] = useState(initial);
  function handleClick() {
    setChecked(!checked);
    setOptions((prev) => {
      if (checked) {
        return prev.filter((i) => i !== idx);
      } else {
        return [...prev, idx];
      }
    });
  }
  return (
    <span
      onClick={handleClick}
      className={`inline-block cursor-pointer mx-2 border-2 border-transparent rounded-3xl px-4 py-2 font-bold 
        hover:scale-110 hover:bg-[right_100%] transition-all duration-200 gray-`}
      style={{
        color: [
          "#22d3ee",
          "#4ade80",
          "#a78bfa",
          "#ff80bf",
          "#60a5fa",
          "#ff9580",
          "#facc15",
        ][idx],
        backgroundImage: checked
          ? "linear-gradient(rgb(249, 250, 251), rgb(249, 250, 251)), \
           linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)"
          : "linear-gradient(rgb(249, 250, 251), rgb(249, 250, 251)), \
           linear-gradient(rgb(229, 231, 235), rgb(229, 231, 235))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backgroundSize: "300% 100%",
        boxShadow: checked ? "0 4px 15px 0 rgba(49, 196, 190, 0.75)" : "none",
      }}
    >
      {name}
    </span>
  );
}
