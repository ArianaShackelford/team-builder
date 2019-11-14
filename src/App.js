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
      role: 'Herbologist'
    }
  ]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
     <h1 className = 'header'>My Team</h1>
     <MemberForm addNewMember={addNewMember}/>
     <Members team={team}/>
    </div>
  );
}

export default App;
