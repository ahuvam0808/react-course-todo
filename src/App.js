//import logo from './logo.svg';
import './App.css';
import {Login } from './components/Login/Login';
import {TodoList}  from './components/ToDo/ToDo';

function App() {
    //const user = {firstName:'Ahuva', lastName : 'Margi', email : 'aa@xx.com'}
    return (
        <div className="App">
       
        <Login></Login>
        <TodoList></TodoList>
        </div>
    );
}

export default App;
