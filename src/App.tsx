import './App.css'

function App() {
  let name: string;
  let age: number | string;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];


  type PersonProps = {
    name: string;
    age: number;
  }

  let person: Object = {
    name: "ez",
    age: 29
  }

  let lotsOfPeople: PersonProps[];

  let printName: (name: string) => void; // returns undefined
  let printName1: (name: string) => never; // return nothing / doest not return anything 

  // function printName(name: string) {
  //   console.log(name);
  // }

  let personName: unknown;


  type X = {
    a: string;
    b: number;
  }

  type Y = X & {
    c: string;
    d: number;
  }

  let y: Y = {
    c: "efdas",
    d: 42,
  }


  interface Person {
    name: string;
    age?: number;
  }

  interface Guy extends Person {
    profession: string;
  }

  console.log(x)

  return (
    <>
      <p className="read-the-docs">
        Hello World!
      </p>
    </>
  )
}

export default App
