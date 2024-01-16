import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseRef from './Hooks/UseRef';
import UseState from './Hooks/UseState';
import ChildA from './Props/ChildA';

function App() {
  const name = 'gagan'
  return (
    <>
    <UseState/>
    <UseEffect/>
    <UseRef/>
    <ChildA name={name}/>
    </>
  );
}

export default App;
