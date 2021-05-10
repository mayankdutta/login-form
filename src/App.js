import { useState } from "react";

function App() {
  const [d, setD] = useState({
    firstName: "",
    lastName: "",
  });
  const [name, setName] = useState("");

  const data = (event) => {
    let input_name = event.target.name;
    let input_value = event.target.value;

    setD(function (prev) {
      if (input_name === "firstName") {
        return {
          firstName: input_value,
          lastName: prev.lastName,
        };
      } else {
        return {
          firstName: prev.firstName,
          lastName: input_value,
        };
      }
    });
  };

  const takeIt = (event) => {
    event.preventDefault();
    setName(d.firstName + " " + d.lastName);
  };
  return (
    <div className="content-center w-screen h-screen grid justify-items-center">
      <div className="text-4xl">
        Hii, <span className="font-light text-8xl"> {name} </span>
      </div>
      <form onSubmit={takeIt} className="flex flex-col">
        <input
          type="text"
          onChange={data}
          placeholder="kaha likh ra hai, idhar likh .... "
          name="firstName"
          className="p-4 my-4 text-2xl border-4 rounded-full focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          onChange={data}
          name="lastName"
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
