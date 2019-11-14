import React, {useState} from 'react';
import styled from 'styled-components';

//styled components
const MemberImput = styled.form`
display:flex;
flex-direction:column;
width: 300px;
justify-content:center;
align-items: center;
padding: 20px;
`;

const FormContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
background: teal; 
color: white;
`;


const MemberForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value})
    };

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({name: '', email: '', role: ''})
    }
    return(
        <FormContainer> 
            <MemberImput className = 'member-form' onSubmit={submitForm}>
                <label htmlFor='name'>Name: </label>
                <input id='name' type='text' name='name' value={member.name} onChange={handleChanges}/>
                <label htmlFor='email'>Email: </label>
                <input id='email' type='email' name='email' value={member.email} onChange={handleChanges}/>
                <label htmlFor='role'>Role: </label>
                <select id='role' name='role' value={member.role} onChange={handleChanges}>
                    <option value='reset'>-- Please choose a role --</option>
                    <option value='Jellyfish Trainer'>Jellyfish Trainer</option>
                    <option value='Emu Whisperer'>Emu Whisperer</option>
                    <option value='Wormologist'>Wormologist</option>
                    <option value='Larkist'>Larkist</option>
                </select>
                <button type='submit'>Add Member</button>
            </MemberImput>
        </FormContainer> 
    )
}

export default MemberForm;