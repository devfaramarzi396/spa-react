import { useState, useEffect } from "react";
import ListUsers from "../../components/list/ListUsers.js";

const IndexUsers = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [len, setLength] = useState(0);
    // const [getNumber, setNumber] = useState(10);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
            //  console.log(data);
                setLoading(false)
                setUsers(data)
                setLength(data.length)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [users]);
    // const handle=(value)=>{
    //     setNumber(value)
       
    //     console.log('get value from user',value);
    //     console.log('get getNumber from user',getNumber);
    // }
    return (
        <>
            <div className="container mt-5">
                <div className="row g-3">
                    <h1>Users :</h1>
                    {loading && <div className="spinner-border"></div>}
                    {error && <p>{error}</p>}
                    <p>count of users : {len}</p>
                   
                    {/* <input style={{width:'300px'}} 
                    type="number" 
                    id="num" 
                    placeholder="show me count of users" 
                    onChange={(e)=> handle(e.target.value)} /> */}
                    <br />
                   
                    {users &&  <ListUsers users={users} />}
                    {/* {users === null ? "" : <ListUsers users={users} />} */}


                </div>
            </div>

        </>
    )
}
export default IndexUsers;