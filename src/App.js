import {Route,Routes} from 'react-router-dom'
import CreatePoll from './Pages/CreatePoll/CreatePoll';
import VotePoll from './Pages/PollVote/PollVote'
import Results from './Pages/Results/Results';
import ApexCharts from 'apexcharts'
import './App.css';


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element ={<CreatePoll />}/>
        <Route path='/vote/:pollID' element={<VotePoll/>}/>
        <Route path='/results/:pollID' element={<Results/>}/>
      </Routes>
    </main>
  );
}

export default App;
