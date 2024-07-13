
import './App.css';
import Explorer from './components/Explorer';
import { data } from './constant/Data'; 

function App() {
  return (
    <div >
     <Explorer data={data}/>
    </div>
  );
}

export default App;
