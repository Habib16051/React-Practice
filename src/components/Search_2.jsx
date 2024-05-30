import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/photos";
// const URL = "https://api.spoonacular.com/recipes/complexSearch";
const Search_2 = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const fetchData = async () => {
    // try {
    const { data } = await axios.get(`${URL}?query=${query}`);
    setData(data);
    // } catch (error) {
    //   console.error("Error fetching data: ", error);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

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

      <button
        onClick={async () => {
          await fetchData();
        }}
      >
        Show Data
      </button>
      <button onClick={() => setData([])}>Hide Data</button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item, id) => (
          <div key={id} className="bg-green-400 rounded-md shadow-md p-4">
            <h2 className="text-lg text-black font-semibold mb-2">
              {item?.title}
            </h2>
            <img
              src={item.url}
              alt={item?.title}
              className="w-full h-auto"
              style={{ maxHeight: "50px" }}
            />
            <br />
            <p className="text-gray-700">{item?.thumbnailUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search_2;
