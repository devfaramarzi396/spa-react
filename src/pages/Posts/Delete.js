import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postId }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleDelete = () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
        
            .then((res) => {
                setLoading(false)
                setError(null)
                Swal.fire(
                    'Yesk!',
                    `You deleted  post ${postId}!`,
                    'success'
                )
               
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
        <>
            <botton onClick={handleDelete} className="btn btn-sm btn-danger">
                {loading && <div className="spinner-border spinner-border-sm"></div>}
                Delete
            </botton>
            <div>
                {error && <p className="text-danger">{error}</p>}
            </div>
        </>
    )
}
export default DeletePost