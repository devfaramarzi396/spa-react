import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setError(null)
                setUser(data)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [userId])
    return (
        <>
            <h1>show user id :{userId}</h1>
            {error && <p>{error}</p>}
            {loading && <div className="snipper-border"></div>}
            {user && <div className="card m-2" style={{ width: '33rem' }} key={user.id}>
                <div className="card-header"  >
                    {user.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span style={{ color: 'green' }}>username</span> : {user.username}</li>
                    <li className="list-group-item"><span style={{ color: 'green' }}>phone</span>: {user.phone}</li>
                    <li className="list-group-item"><span style={{ color: 'green' }}>website</span> : {user.website}</li>
                    <li className="list-group-item"><span style={{ color: 'red' }}>company</span> : {user.company.bs}</li>
                </ul>
            </div>
            }

        </>
    )
}
export default ShowUser;
