import React, { useState } from "react";

const LeftSection = () => {

  let [todoTitle, setTodoTitle] = useState("");
  let [todoDescription, setTodoDescription] = useState("");
  let [todoData, setTodoData] = useState({});

  const submitHandler = () => {

    console.log(todoTitle, todoDescription);
    
    setTodoData({
      title: todoTitle,
      description: todoDescription
    });

    console.log(todoData);

    todoTitle = setTodoTitle("");
    todoDescription = setTodoDescription("");
  }

  // console.log(todoTitle);
  // console.log(todoDescription);

  return (

    <section className="bg-green-200 w-[50vw] pt-4 flex items-center justify-center border-r-2 border-gray-300">
      {/* title */}
      <div className="flex flex-col w-5/6 items-center justify-center space-y-10 bg-red-100 m-auto p-1">
        <h1 className="text-xl font-bold"> TODO </h1>
        <p className="text-[#3F3D56] text-center text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in
          soluta, at suscipit, nemo natus fugit, facilis architecto aliquid
          quisquam eligendi vero expedita? Debitis rem ut expedita, veritatis
          blanditiis laborum!
        </p>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
          value={todoTitle}
          className="p-2 border-gray-200 rounded-sm outline-none w-56"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setTodoDescription(e.target.value);
          }}
          value={todoDescription}
          className="p-2 border-gray-200 rounded-sm outline-none w-56"
        />
        <button className="bg-[#597EF7] w-52 text-white p-2 rounded-sm hover:bg-[#2B57E0]" onClick={() => submitHandler()}> Add </button>
      </div>
    </section>
  );
};

export default LeftSection;
