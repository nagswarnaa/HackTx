import React, { useState } from 'react';
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

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
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group Auth-form-content">
                            <label className="label">Email address</label>
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
                            Login
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;