
import './App.css';
import BarChart from './component/BarChart';
import DoughnutChart from './component/DoughnutChart';
import LineChart from './component/LineChart';

function App() {
  return (
    <div className="App">
     <LineChart/>
     <BarChart/>
     <DoughnutChart/>
  
    </div>
  );
}

export default App;
