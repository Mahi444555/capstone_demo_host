import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Color from './components/Color';
import Project from './components/Project';
import BarChart from './components/BarChart';
import Revenue from './components/Revenue';
import Ilustration from './components/Ilustration';
import Aproch from './components/Aproch';
function App() {
  let data={
    earningMonthly:"40,000",
    earningAnnnual:"210,000",
    taskCompletion:"40",
    pendingrequest:"20"
  }

  return (
    <div id="wrapper">
    <Sidebar/>
    <Dashboard data={data}/>
    <Project/>
    <Color/>
    <BarChart/>
    <Revenue/>
    <Ilustration/> 

  <Aproch/>
    </div>
  );
}

export default App;
