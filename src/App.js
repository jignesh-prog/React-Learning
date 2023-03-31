import './App.css';
//import Greet from './Jignesh/Greet';
import Time2 from './Jignesh/Time2';
import Form from './Jignesh/Form';
import Array from './Jignesh/Array';
import Effect1 from './Jignesh/Effect1';
import Effect3 from './Jignesh/Effect3';
import SetInterval from './Jignesh/SetInterval';
import FetchData from './Jignesh/FetchData';

function App() {
  return (
    <div className="App">
      <SetInterval className="interval" /><br/>
      <FetchData /> <br/>
      <Time2 class="Count"/><br/>
      <Form /><br />
      <Array/><br/>
      <Effect1 /> 
      <br/>
      <Effect3 />

    </div>
  );
}

export default App;
