import React, { useId } from 'react';

const SearchBox = ({ searchContact }) => {
  const id = useId();

  return (
    <div className="search flex flex-col gap-2 items-start my-4 card max-w-md">
      <h3 className="text-lg font-semibold">Find contacts by name</h3>
      <label htmlFor={id} className="sr-only">Find contacts by name</label>
      <input
        id={id}
        type="text"
        placeholder="Search..."
        onInput={searchContact}
        className="border rounded-md px-4 py-2 w-full"
      />
    </div>
  );
};

export default SearchBox;
