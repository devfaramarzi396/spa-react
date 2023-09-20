import { Link } from "react-router-dom"

const ListUsers = ((props) => {

    return (
        <>
            {
                props.users.map(user => (

                    <div className="card m-2" style={{ width: '18rem' }} key={user.id}>
                        <Link className="card-header" to={`users/${user.id}`} >
                            {user.name}
                        </Link>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span style={{ color: 'lightgreen' }}>username</span> : {user.username}</li>
                            <li className="list-group-item"><span style={{ color: 'lightgreen' }}>phone</span>: {user.phone}</li>
                            <li className="list-group-item"><span style={{ color: 'lightgreen' }}>website</span> : {user.website}</li>
                        </ul>
                    </div>

                )).slice(0, 6)
            }
        </>



    )
})
export default ListUsers