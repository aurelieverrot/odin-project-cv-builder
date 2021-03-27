import React, { useState } from 'react';

function GeneralInformation() {
    const [state, setState] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        github: '',
        editGeneralInfo: true
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const newMode = !state.editGeneralInfo
        setState({
            ...state,
            editGeneralInfo: newMode
        })
    }

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    if (state.editGeneralInfo === true) {
        return (
            <div>
                <form className="general-info" onSubmit={onSubmit}>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="First Last"
                            value={state.fullName}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="your@email.com"
                            value={state.email}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="XXX-XXX-XXXX"
                            value={state.phone}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <label>LinkedIn Profile</label>
                        <input
                            type="text"
                            name="linkedIn"
                            placeholder="linkedin.com/<your-name>"
                            value={state.linkedIn}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <label>Github Profile</label>
                        <input
                            type="text"
                            name="github"
                            placeholder="github.com/<your-name>"
                            value={state.github}
                            onChange={handleChange}/>
                    </div>

                    <input type="submit" />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <label>Full Name</label>
                    <p>{state.fullName}</p>
                </div>

                <div>
                    <label>Email</label>
                    <p>{state.email}</p>
                </div>

                <div>
                    <label>Phone Number</label>
                    <p>{state.phone}</p>
                </div>

                <div>
                    <label>LinkedIn Profile</label>
                    <p>{state.linkedIn}</p>
                </div>

                <div>
                    <label>Github Profile</label>
                    <p>{state.github}</p>
                </div>
                <button onClick={onSubmit}>Edit General Information</button>
            </div>
        )
    }
}

export default GeneralInformation;