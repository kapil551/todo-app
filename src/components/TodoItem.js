import React from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';

const TodoItem = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-100">
        <div>
            Todo Title 1
            <div>Description comes here...</div>
        </div>
        <div className="cursor-pointer">
            <BsThreeDotsVertical />
        </div>
    </div>
  );
};

export default TodoItem;
