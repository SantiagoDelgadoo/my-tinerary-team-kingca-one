import React from "react";

function FormText(props) {
  return (
    <form>
      <label>
        <input
          placeholder="search"
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
