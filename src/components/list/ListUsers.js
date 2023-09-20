import { Link } from "react-router-dom"

const ListUsers = ((props) => {

    return (
        <>
            {
                props.users.map(user => (
                    <Link to = {`users/${user.id}`} user={user} className="card" style={{ width: '18rem' }} >
                        <div  key={user.id}>
                            <div className="card-header">
                                {user.name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span style={{ color: 'lightgreen' }}>username</span> : {user.username}</li>
                                <li className="list-group-item"><span style={{ color: 'lightgreen' }}>phone</span>: {user.phone}</li>
                                <li className="list-group-item"><span style={{ color: 'lightgreen' }}>website</span> : {user.website}</li>
                            </ul>
                        </div>
                    </Link>
                )).slice(0, 6)
            }
        </>



    )
})
export default ListUsers