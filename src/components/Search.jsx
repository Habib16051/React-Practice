import React, { useEffect, useState } from "react";
// const URL = "https://api.spoonacular.com/recipes/complexSearch";
const URL = "https://jsonplaceholder.typicode.com/posts";
// const API_KEY = "231dcda2a81041c199fdeb156e003174";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchFood() {
      await fetch(`${URL}?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
      <br />
      <br />
      <div>
        {data.map((item, id) => (
          <li key={id}>{item.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Search;
