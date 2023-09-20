import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
    const { postId } = useParams()
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
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [postId])
    return (
        <>
            <h1>show post id :{postId}</h1>
            {error && <p>{error}</p>}
            {loading && <div className="snipper-border"></div>}
            {post && <div className="card m-2" style={{ width: '18rem' }} key={post.id}>
                <div className="card-header">
                    <h5 className="card-title">{post.title}</h5>

                </div>
                <div className="card-body">
                    <p className="card-text">{post.body}</p>

                </div>
            </div>
            }

        </>
    )
}
export default ShowPost;
