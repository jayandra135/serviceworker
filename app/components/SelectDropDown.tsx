"use client";
import React, { useEffect, useState } from "react";

const cityData = [
  { id: 1, name: "mumbai" },
  { id: 2, name: "pune" },
  { id: 3, name: "banglore" },
  { id: 4, name: "hyderabad" },
  { id: 5, name: "chennai" },
];

type DropData = {
  id: number;
  name: string;
};

const SelectDropDown = () => {
  const [selectValue, setSelectValue] = useState<DropData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filterData, setFilterData] = useState<DropData[]>(cityData);
  const [searchText, setSearchText] = useState("");
  //   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     console.log("handleSelect", e.target.value);
  //   };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    if (!searchText.trim()) {
      setFilterData(cityData);
      return;
    }

    if (searchText) {
      const data = cityData.filter((ele) => ele?.name.includes(searchText));

      setFilterData(data);
    }
  }, [searchText]);

  const handleOnFcous = () => {
    setIsOpen(true);
  };

  const handleOnClick = (id: number) => {
    const Data = cityData.find((ele) => ele?.id === id);
    console.log("handleOnClick", Data);

    if (Data) {
      const exists = selectValue.some((ele) => ele?.id === Data.id);

      if (!exists) {
        setSelectValue((prev) => [...prev, Data]);
      }
    }

    setIsOpen(false);
  };

  console.log("selectValue", selectValue);

  return (
    <div className="flex flex-col gap-5">
      <h1>select dropdown</h1>

      {/* <select onChange={(e) => handleSelect(e)}>
        <option value="mumbai">mumbai</option>
        <option value="pune">pune</option>
        <option value="banglore">banglore</option>
        <option value="hyderabad">hyderabad</option>
        <option value="chennai">chennai</option>
      </select> */}

      <div className="relative ">
        <div className="flex gap-2 flex-wrap mb-2">
          {selectValue.map((item) => (
            <span key={item.id} className="px-2 py-1 bg-gray-200 rounded">
              {item.name}
            </span>
          ))}
        </div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleOnChange(e)}
          onFocus={handleOnFcous}
          className="border border-amber-300"
        />
        {isOpen && (
          <div className=" w-full">
            <ul className="border border-gray-400 w-full">
              {filterData.map((ele) => {
                return (
                  <li
                    key={ele?.id}
                    onClick={() => handleOnClick(ele.id)}
                    className="w-full hover:bg-amber-200 text-black"
                  >
                    {ele?.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDropDown;
