import { useState } from "react";

function App() {
  const [name, getName] = useState("");
  const [fullName, getFullName] = useState("");
  const data = (event) => {
    getName(event.target.value);
  };

  const takeIt = (event) => {
    event.preventDefault();
    getFullName(name);
  };
  return (
    <div className="main">
      <div> Hii {fullName} </div>
      <form onSubmit={takeIt}>
        <input
          type="text"
          onChange={data}
          placeholder="kaha likh ra hai, idhar likh .... "
        />
        <button type="submit"> Idhar daba </button>
      </form>
    </div>
  );
}

export default App;
