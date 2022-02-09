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

    <section className="bg-green-200 w-[50vw] pt-4">
      {/* title */}
      <div className="flex flex-col w-3/4 items-center justify-center space-y-4 bg-red-100 m-auto p-1">
        <div> TODO </div>
        <div className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in
          soluta, at suscipit, nemo natus fugit, facilis architecto aliquid
          quisquam eligendi vero expedita? Debitis rem ut expedita, veritatis
          blanditiis laborum!
        </div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
          value={todoTitle}
          className="p-2"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setTodoDescription(e.target.value);
          }}
          value={todoDescription}
          className="p-2"
        />
        <button className="bg-[#597EF7] w-44 text-white p-2" onClick={() => submitHandler()}> Add </button>
      </div>
    </section>
  );
};

export default LeftSection;
