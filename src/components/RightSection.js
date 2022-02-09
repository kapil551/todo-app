import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { BiSearchAlt2 } from 'react-icons/bi';

const RightSection = () => {

  return (
    <section className="bg-red-200 w-[50vw] pt-4">

      <div className="m-auto bg-red-300 w-3/4 p-1">

        <div>TODO LIST</div>

        <div className="flex flex-row items-center justify-between">

          <div className="relative">
            <input type="text" placeholder="Search" />
            <BiSearchAlt2  className="absolute top-1 right-1"/>
          </div>

          <select id="" name="">
            <option disabled selected hidden>
              Filter By
            </option>
            <option defaultValue="Completed">Completed</option>
            <option defaultValue="Favourite">Favourite</option>
            <option defaultValue="Deleted">Deleted</option>
          </select>
        </div>

        <div>

          {/* {
            todoListContext.todoList.map((todo) => {
              return (
                <TodoItem />
              )
            })
          } */}
          
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />

        </div>

      </div>

    </section>
  );
};

export default RightSection;
