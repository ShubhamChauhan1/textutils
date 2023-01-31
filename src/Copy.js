import logo from './logo.svg';
import './App.css';

let name= "Shubham";
function App() {
  return (
  <>
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav><br /><hr />
  <div className='container'>
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores recusandae odio, adipisci voluptas et molestias officia, ea ipsum nemo provident inventore nostrum repellat illum amet numquam magnam. Aliquam, quo repellendus!</p>
  </div>
  </>
  );
}

export default App;