import React from 'react';

function GeneralInformation() {
    const [state, setState] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        github: ''
    })

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    return (
        <div>
            <form className="general-info">
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

                <button type="submit">Save</button>
            </form>
        </div>
    )

}

export default GeneralInformation;