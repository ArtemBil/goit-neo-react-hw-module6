import React, { useId } from 'react';
import { changeFilter } from '../../redux/filtersSlice.js';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  const searchContact = (event) => {
    const value = event.target.value;

    dispatch(changeFilter(value));
  };

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
