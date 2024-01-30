import { useEffect, useState } from "react";
import carddata from "./data";

const Cards = () => {
  const [usecarddata, setusecarddata] = useState(carddata);
  const [filteredCardData, setFilteredCardData] = useState(usecarddata);
//   console.log(usecarddata)
  const searchValue = (value) => {
    console.log(value);
    const filteredData = usecarddata.filter((card) =>
      card.Title.toLowerCase().includes(value.toLowerCase()) ||
      card.Description.toLowerCase().includes(value.toLowerCase()) ||
      card.Color.toLowerCase().includes(value.toLowerCase()) ||
      card.Price.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCardData(filteredData);
  };

  useEffect(() => {
    setusecarddata(carddata); // Reset to original data when search input is empty
  }, []);

  return (
    <div className='w-full  flex-col bg-gray-300 flex justify-center items-center gap-10 flex-wrap pt-20 pb-20'>
      <div className="w-full flex justify-end pr-5">
        <form className="flex gap-x-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={(e) => searchValue(e.target.value)}
            className="h-10 w-72 rounded-md shadow-md px-3"
          />
          <span className="w-40">
            <button
              type="submit"
              className="w-full h-10 rounded-md shadow-md text-white bg-blue-500"
            >
              Search
            </button>
          </span>
        </form>
      </div>
      <div className="flex flex-wrap gap-10 px-20">
        {filteredCardData.map((val, index) => (
          <div key={index} className='flex  w-80 h-80 bg-white rounded-md shadow-md flex-col'>
            <div className='h-1/4 w-full border-b border-gray-300 flex justify-center items-center'>
              <h1 className="text-2xl font-bold">{val.Title}</h1>
            </div>
            <div className='w-full h-3/4 flex flex-col p-5 gap-y-5'>
              <h1>{val.Description}</h1>
              <h1>
                Color: <span className="text-2xl font-bold">{val.Color}</span>
              </h1>
              <h1>
                Price: <span className="text-2xl font-bold">{val.Price}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
