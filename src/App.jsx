import { useState } from "react";
import Table from "./components/Table";
import Options from "./components/Options";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([1, 3]); // "OCT","HEX","BIN","Symbol","HTML Number","HTML Name","Description"
  const [extending, setExtending] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-2">ASCII Table</h1>
      <div className="mb-6 w-full">
        <Options options={options} setOptions={setOptions} />
        <Search />
      </div>
      {!extending ? (
        <div className="text-xs border w-fit grid grid-cols-4">
          <Table from={0} to={31} options={options} />
          <Table from={32} to={63} options={options} />
          <Table from={64} to={95} options={options} />
          <Table from={96} to={127} options={options} />
        </div>
      ) : (
        <div className="text-xs border w-fit">
          <Table from={0} to={31} options={options} />
          <Table from={32} to={63} options={options} />
          <Table from={64} to={95} options={options} />
          <Table from={96} to={127} options={options} />
          <Table from={128} to={159} options={options} />
          <Table from={160} to={191} options={options} />
          <Table from={192} to={223} options={options} />
          <Table from={224} to={255} options={options} />
        </div>
      )}
    </div>
  );
}

export default App;
