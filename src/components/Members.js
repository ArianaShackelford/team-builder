import React from 'react';
import styled from 'styled-components';

//styled components
const MemberCard = styled.div`
width: 300px;
height: 300px;
background: rosybrown;
color: white;
border-radius: 10px;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
border: 2px dashed black;
margin: 20px;

`;
const MemberList = styled.div`
display: flex;
flex direction: row;
flex-wrap: wrap;
justify-content: center; 
width: 100%;
height:auto;
background: teal;
`;

const Members = props => {
    return (
        <MemberList className='member-list'>
            {props.team.map(member => (
              <MemberCard className='member' key={member.id}>
                  <h2>{member.name}</h2>
                  <p>{member.email}</p>
                  <p>{member.role}</p>
              </MemberCard> 
            ))}
        </MemberList>
    )
};

export default Members;