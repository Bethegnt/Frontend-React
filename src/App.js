import { createContext } from 'react';
import './App.css';
// import UseEffect from './Hooks/UseEffect';
// import UseRef from './Hooks/UseRef';
// import UseState from './Hooks/UseState';
// import ChildA from './Props/ChildA';
// import ChildD from './ContextAPI/ChildD';
import UseContext from './Hooks/UseContext';

const data = createContext();

function App() {
  const name = 'Gagan';
  return (
    <>
    {/* <UseState/> */}

    {/* <UseEffect/> */}

    {/* <UseRef/> */}

    {/* <ChildA name={name}/> */}
    {/* this above code component for Props drilling */}

    {/* <data.Provider value={name}>
        <ChildD/>
    </data.Provider> */}
    {/* this above code component for ContextAPI */}

    <data.Provider value={name}>
    <UseContext/>
    </data.Provider>
    </>
  );
}

export default App;
export {data};