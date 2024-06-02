import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/photos";

const Search_2 = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${URL}?query=${query}`);
      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        className="border border-green-300 rounded-md py-2 px-4 mb-4"
        placeholder="Search here"
      />
      <div className="flex space-x-4 mb-8">
        <button
          onClick={async () => {
            await fetchData();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Show Data
        </button>
        <button
          onClick={() => setData([])}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Hide Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
        {data?.map((item, id) => (
          <div
            key={id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2">
              <img
                src={item.url}
                alt={item?.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-lg text-black font-semibold m-4">
                {item?.title}
              </h2>
              <p
                className="text-blue-500 overflow-hidden m-4"
                style={{ maxWidth: "100%" }}
              >
                {item?.thumbnailUrl}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search_2;
