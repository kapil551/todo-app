import React from "react";
import MenuDropDown from "./MenuDropDown";

const TodoItem = () => {

    return (
        <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
            <div className="">
                <h3 className="font-bold">Todo Title 1</h3>
                <p className="text-sm">Description comes here...</p>
            </div>
            <div className="cursor-pointer">
                <MenuDropDown className="" />
            </div>
        </div>
    );
};

export default TodoItem;
