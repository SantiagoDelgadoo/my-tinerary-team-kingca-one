import React from "react";

export default function FormSelect() {
  return (
    <form action="" className="filter-select">
      <select name="places" id="place-select" placeholder='search'>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </form>
  );
}
