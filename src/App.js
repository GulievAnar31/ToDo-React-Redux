import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import {Provider} from 'react-redux'
import store from './store/store';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Header />
      <Todo />
    </div>
    </Provider>
  );
}

export default App;
