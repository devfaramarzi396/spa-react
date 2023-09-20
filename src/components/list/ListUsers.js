const ListUsers = ((props) => {
   
    return (
        <>
           {
            props.users.map(user => (
                <div className="card" style={{width: '18rem'}} key={user.id}>
                    <div className="card-header">
                     {user.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span style={{color:'lightgreen'}}>username</span> : {user.username}</li>
                        <li className="list-group-item"><span style={{color:'lightgreen'}}>phone</span>: {user.phone}</li>
                        <li className="list-group-item"><span style={{color:'lightgreen'}}>website</span> : {user.website}</li>
                    </ul>
                </div>
            )).slice(0,6)
        }
        </>
     


    )
})
export default ListUsers