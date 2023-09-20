import { Link } from "react-router-dom"

const ListPosts = ((props) => {

    return (
        <>
            {
                props.posts.map(post => (

                    <div className="card m-2" style={{ width: '18rem' }} key={post.id}>
                        <div className="card-header">
                        <Link to={`posts/${post.id}`}> <h5 className="card-title">{post.title}</h5></Link>
                        </div>
                        <div className="card-body">
                         
                            <p className="card-text">{post.body}</p>

                        </div>
                    </div>

                )).slice(0, 9)
            }
        </>



    )
})
export default ListPosts