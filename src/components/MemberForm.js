import React, {useState} from 'react';

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
        <form>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name' onChange={handleChanges}/>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='email' name='email' onChange={handleChanges}/>
            <label htmlFor='role'>Role: </label>
            <select id='role' onChange={handleChanges}>
                <option value=''>-- Please choose a role --</option>
                <option value='jellyfishTrainer'>Jellyfish Trainer</option>
                <option value='emuWhisperer'>Emu Whisperer</option>
                <option value='wormologist'>Wormologist</option>
                <option value='larkist'>Larkist</option>
            </select>
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default MemberForm;