import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));

    }
    return (
        <>
            <div className="container mt-6">
                <div className="row g-3">
                    <div className="col-md-6">
                        <h3>Create Post :</h3>

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                                <div className="form-text text-danger">
                                    {title ? '' : 'title is required'}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Body</label>
                                <textarea className="form-control" rows="3" onChange={(e) => setBody(e.target.value)}></textarea>
                                <div className="form-text text-danger">
                                    {body ? '' : "body is required"}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark" disabled={title === '' || body === ''}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreatePost