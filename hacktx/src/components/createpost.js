import React, { useState } from 'react';
const Post = () => {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [titleError, settitleError] = useState("");
    const [contentError, setContentError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;
        if (username.length === 0) {
            formIsValid = false;
            setUsernameError("User Name cannot be empty");
            return false;
        }
        else {
            setUsernameError("");
            formIsValid = true;
        }
        if (title.length === 0) {
            formIsValid = false;
            settitleError("Title cannot be empty");
            return false;
        } else {
            settitleError("");
            formIsValid = true;
        }

        if (content.length === 0) {
            formIsValid = false;
            setContentError(
                "Content cannot be empty"
            );
            return false;
        } else {
            setContentError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const createPost = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            console.log("form validated")
        }
    };

    return (
        <div className="App">
            <div className="cont">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <h3>Create Post</h3>
                        <form id="createpost" onSubmit={createPost}>
                            <div className="form-group">
                                <label className="label">User Name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="NameInput"
                                    name="NameInput"
                                    aria-describedby="fullnameHelp"
                                    placeholder="Enter UserName "
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <small id="fullnameHelp" className="text-danger form-text">
                                    {usernameError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Post Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Post Title"
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {titleError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Post Content</label>
                                <textarea
                                    type="password"
                                    className="form-control"
                                    id="content"
                                    placeholder="Enter Post Content"
                                    onChange={(event) => setContent(event.target.value)}
                                />
                                <small id="passworderror" className="text-danger form-text">
                                    {contentError}
                                </small>
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;