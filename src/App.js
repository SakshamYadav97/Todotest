
import './App.css';
import store from './store/store'
import {Provider} from "react-redux"
import List from "./components/list"
import InputBox from "./components/inputBox"

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <InputBox/>
        <List/>
      </div>
    </Provider>
  );
}

export default App;

