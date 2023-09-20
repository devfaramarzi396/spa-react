import { useParams } from "react-router-dom"
const ShowUser = ({user}) => {
     const {userId} = useParams()

    return (
        <>
        <h1>show user with id : {userId}</h1>
            {/* <div className="card" style={{ width: '33rem' }} key={user.id}>
                <div className="card-header">
                    {user.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span style={{ color: 'lightgreen' }}>username</span> : {user.username}</li>
                    <li className="list-group-item"><span style={{ color: 'lightgreen' }}>phone</span>: {user.phone}</li>
                    <li className="list-group-item"><span style={{ color: 'lightgreen' }}>website</span> : {user.website}</li>
                </ul>
            </div> */}
        </>
    )
}
export default ShowUser