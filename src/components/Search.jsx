import React, { useEffect, useState } from "react";
// const URL = "https://api.spoonacular.com/recipes/complexSearch";
const URL = "https://jsonplaceholder.typicode.com/posts";
// const API_KEY = "231dcda2a81041c199fdeb156e003174";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    async function fetchFood() {
      await fetch(`${URL}?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    if (showData) {
      fetchFood();
    }
  }, [query, showData]);
  return (
    <div className="container mx-auto px-4">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        className="border border-green-300 rounded-md py-2 px-4 mb-4"
        placeholder="Search here"
      />
      <br />
      <br />
      <button onClick={() => setShowData(!showData)} className="mb-4">
        {showData ? "Hide Data" : "Show Data"}
      </button>
      {showData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((item, id) => (
            <div key={id} className="bg-green-400 rounded-md shadow-md p-4">
              <h2 className="text-lg text-black font-semibold mb-2">
                {item?.title}
              </h2>
              <p className="text-gray-700">{item?.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
