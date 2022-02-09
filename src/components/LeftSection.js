import React from "react";

const LeftSection = () => {

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
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <button className="bg-[#597EF7] w-44 text-white"> Add </button>
      </div>

    </section>
  );
};

export default LeftSection;
