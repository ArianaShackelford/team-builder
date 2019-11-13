import React, {useState} from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    return(
        <form>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name'/>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='email' name='email'/>
            <label htmlFor='role'>Role: </label>
            <input id='role' type='dropdown' name='role'/>
        </form>
    )
}

export default MemberForm;