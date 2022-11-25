import React from "react";

function FormText(props) {
  return (
    <form>
      <label className="containerSearchcities">
        <input className="searchCities"
          placeholder="Search here for the name of the hotel you want"
          type="text"
          id="FormText"
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </form>
  );
}

export default FormText;
