import { useState } from "react";

function SearchForm({ getCharacters }) {
  let [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getCharacters(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;