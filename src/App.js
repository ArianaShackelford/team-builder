import React, {useState} from 'react';

import Members from './components/Members';
import MemberForm from './components/MemberForm';
import './App.css';
import { memberExpression } from '@babel/types';

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Ariana Wilder',
      email: 'ariana.shackelford@gmail.com',
      role: ''
    }
  ]);

  const addNewMember = team => {
    const newMember = {
      id: Date.now(),
      name: team.name,
    };
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
     <h1>My Team</h1>
     <MemberForm addNewMember={addNewMember}/>
     <Members team={team}/>
    </div>
  );
}

export default App;
