import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
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
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire(
                    'Good job!',
                    'You created post!',
                    'success'
                )
                console.log(data)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            });

    }
    return (
        <>

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
                    <button type="submit" className="btn btn-dark" disabled={title === '' || body === ''}>
                        {loading && <div className="spinner-border spinner-border-sm"></div>}
                        Create
                    </button>
                    <div>
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </form>
            </div>

        </>
    )
}
export default CreatePost