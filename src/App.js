import { useState } from "react";

function App() {
  const [name, getName] = useState("");
  const [name2, getName2] = useState("");
  const [fullName, getFullName] = useState("");
  const data = (event) => {
    getName(event.target.value);
  };

  const data2 = (event) => {
    getName2(event.target.value);
  };

  const takeIt = (event) => {
    event.preventDefault();
    getFullName(name + " " + name2);
  };
  return (
    <div className="content-center w-screen h-screen grid justify-items-center">
      <div className="text-4xl">
        Hii, <span className="font-light text-8xl"> {"  " + fullName} </span>
      </div>
      <form onSubmit={takeIt} className="flex flex-col">
        <input
          type="text"
          onChange={data}
          placeholder="kaha likh ra hai, idhar likh .... "
          className="p-4 my-4 text-2xl border-4 rounded-full focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          onChange={data2}
          placeholder="password bi likh fata fat"
          className="p-4 my-4 text-2xl border-4 rounded-full focus:outline-none focus:border-red-500"
        />
        <button
          className="self-center p-4 mx-auto text-3xl bg-red-500 border-8 border-red-500 rounded-full hover:border-red-800"
          type="submit"
        >
          login Maar
        </button>
      </form>
    </div>
  );
}

export default App;
