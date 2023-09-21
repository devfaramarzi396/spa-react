import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

const EditPost = () => {
    const { postId } = useParams()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setError(null)
                setPost(data)
                console.log(data);
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [postId])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
                id: post.id
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
                    'You updated this post!',
                    'success'
                )
                console.log(data)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
                Swal.fire(
                    'Uoooops!',
                    (err.message),
                    'warning'
                )
            });

    }
    return (
        <div className="col-md-6">
            <h3>Edit Post :</h3>
            {post &&
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>

                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={post.title} />
                        <div className="form-text text-danger">
                            {post.title ? '' : 'title is required'}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Body</label>

                        <textarea className="form-control" rows="6" onChange={(e) => setBody(e.target.value)} value={post.body}></textarea>
                        <div className="form-text text-danger">
                            {post.body ? '' : "body is required"}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success" disabled={post.title === '' || post.body === ''} >
                        {loading && <div className="spinner-border spinner-border-sm"></div>}
                        Update
                    </button>
                    <div>
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </form>
            }


        </div>
    )
}
export default EditPost