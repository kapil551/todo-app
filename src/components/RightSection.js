import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { BiSearchAlt2 } from 'react-icons/bi';

const RightSection = () => {

  return (
    <section className="bg-red-200 w-[50vw] pt-4">

      <div className="m-auto bg-red-300 w-5/6 h-5/6 p-1 pt-6">

        <div className="text-lg font-bold">TODO LIST</div>

        <div className="flex flex-row items-center justify-between mt-8">

          <div className="relative">
            <input type="text" placeholder="Search" className="p-1 rounded-sm outline-none" />
            <BiSearchAlt2  className="absolute top-2 right-1 text-[#3F3D56]"/>
          </div>

          <select id="" name="" className="p-1 h-8 rounded-sm outline-none">
            <option disabled selected hidden>
              Filter By
            </option>
            <option defaultValue="Completed">Completed</option>
            <option defaultValue="Favourite">Favourite</option>
            <option defaultValue="Deleted">Deleted</option>
          </select>

        </div>

        <div className="space-y-3 mt-40">

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
