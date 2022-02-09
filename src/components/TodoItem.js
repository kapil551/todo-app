import React from "react";
import MenuDropDown from "./MenuDropDown";

const TodoItem = () => {

    return (
        <div className="flex items-center justify-between border-b-2 border-gray-100">
            <div>
                Todo Title 1
                <div>Description comes here...</div>
            </div>
            <div className="cursor-pointer">
                <MenuDropDown className="" />
            </div>
        </div>
    );
};

export default TodoItem;
