import React, { useState } from "react"
const Register = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullNameError, setfullNameError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;
        if (fullName.length === 0) {
            formIsValid = false;
            setfullNameError("Full Name cannot be empty");
            return false;
        }
        else {
            setfullNameError("");
            formIsValid = true;
        }
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {

        }
    };

    return (
        <div className="login">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt={"Sample Imag"} />
            <div className="container">
                <div className="col-md-4 cls">
                    <form id="loginform" className='Auth-form' onSubmit={loginSubmit}>
                        <h3 className="Auth-form-title">Registration Form</h3>
                        <div className="form-group Auth-form-content">
                            <label className="label">Full Name</label>
                            <input
                                type="name"
                                className="form-control"
                                id="NameInput"
                                name="NameInput"
                                aria-describedby="fullnameHelp"
                                placeholder="Enter FullName"
                                onChange={(event) => setFullName(event.target.value)}
                            />
                            <small id="fullnameHelp" className="text-danger form-text">
                                {fullNameError}
                            </small>
                        </div>
                        <div className="form-group Auth-form-content">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <div className="form-group Auth-form-content">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>

                        <button type="submit" className="d-grid gap-2 mt-3 btn btn btn-primary ">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;