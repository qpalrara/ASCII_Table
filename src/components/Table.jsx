import axios from "axios";
import data from "../ascii.json";

export default function Table({ from, to, options }) {
  const headTr = (
    <tr>
      <th className="border border-b-2 px-2 py-1">DEC</th>
      {options
        .map(
          (option) =>
            [
              "OCT",
              "HEX",
              "BIN",
              "Symbol",
              "HTML Number",
              "HTML Name",
              "Description",
            ][option]
        )
        .map((i) => (
          <th className="border border-b-2 px-2 py-1" key={i}>
            {i}
          </th>
        ))}
    </tr>
  );

  const bodyTrs = data
    .filter((_, idx) => idx >= from && idx <= to)
    .map((i, idx) => (
      <Tr key={idx} idx={from + idx} data={i} options={options} />
    ));

  return (
    <table className="border float-left">
      <thead>{headTr}</thead>
      <tbody>{bodyTrs}</tbody>
    </table>
  );
}

function Tr({ idx, data, options }) {
  let color;
  if (idx <= 31 || idx ==127) { color = "bg-red-100"; }
  else if (idx >= 48 && idx <= 57) { color = "bg-yellow-100"; }
  else if (idx >= 65 && idx <= 90) { color = "bg-green-100"; }
  else if (idx >= 97 && idx <= 122) { color = "bg-lime-100"; }
  else if (idx == 32) { color = "bg-gray-100"; }
  else { color = "bg-blue-100"; }
  return (
    <tr key={idx} className={`${color}`} id={idx}>
      <Td idx={idx}>{idx}</Td>
      {options
        .map((option) => data[option])
        .map((i, _idx) => (
          <Td key={_idx} idx={idx}>{i}</Td>
        ))}
    </tr>
  );
}

function Td({ children, idx }) {
  function handleClick() {
    navigator.clipboard.writeText(String.fromCharCode(idx));
  }
  return (
    <td class="relative group cursor-pointer hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-100"
    onClick={handleClick}>
      <div
        className="absolute -inset-1 rounded-lg border-2 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage:
            "linear-gradient(135deg, hsl(308, 56%, 60%), hsl(196, 75%, 62%)) 1",
        }}
      />
      <div class="relative px-2 bg-transparent rounded-lg group-hover:font-bold group-hover:transform transition-[font-weight] duration-100">
        {children}
      </div>
    </td>
  );
}
