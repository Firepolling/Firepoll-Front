import {Route,Routes} from 'react-router-dom'
import CreatePoll from './Pages/CreatePoll/CreatePoll';
import VotePoll from './Pages/PollVote/PollVote'
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element ={<CreatePoll />}/>
        <Route path='/vote/:pollID' element={<VotePoll/>}/>
      </Routes>
    </main>
  );
}

export default App;
