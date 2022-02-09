import React from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuDropDown from "./MenuDropDown";

const TodoItem = () => {

    const handleDropDown = () => {
        console.log("Click");

    }

    return (
        <div className="flex items-center justify-between border-b-2 border-gray-100">
            <div>
                Todo Title 1
                <div>Description comes here...</div>
            </div>
            <div className="cursor-pointer">
                {/* <button className="" onClick={() => handleDropDown()}>
                    <BsThreeDotsVertical />
                </button> */}
                <MenuDropDown className="bg-green-300" />
            </div>
        </div>
    );
};

export default TodoItem;
