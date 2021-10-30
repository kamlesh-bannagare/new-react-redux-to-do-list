
import './App.css';
import {useSelector} from 'react-redux';   // to extract the state from reducer or from the store basically we are using useSelector.
import TodoList from './components/TodoList.js';


function App() {
  const state = useSelector((state) =>({...state}))
  console.log("state", state);
  return (
    <div className="App">
     <TodoList />
    </div>
  );
}

export default App;
