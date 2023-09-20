import { useState, useEffect } from "react";
import ListPosts from "../../components/list/ListPosts.js";

const IndexPosts = () => {

    const [posts, setposts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [len, setLength] = useState(0);
    // const [getNumber, setNumber] = useState(10);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
            //  console.log(data);
                setLoading(false)
                setposts(data)
                setLength(data.length)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [posts]);
    // const handle=(value)=>{
    //     setNumber(value)
       
    //     console.log('get value from post',value);
    //     console.log('get getNumber from post',getNumber);
    // }
    return (
        <>
            <div className="container mt-5">
                <div className="row g-3">
                    <h1>posts :</h1>
                    {loading && <div className="spinner-border"></div>}
                    {error && <p>{error}</p>}
                    <p>count of posts : {len}</p>
                   
                    {/* <input style={{width:'300px'}} 
                    type="number" 
                    id="num" 
                    placeholder="show me count of posts" 
                    onChange={(e)=> handle(e.target.value)} /> */}
                    <br />
                   
                    {posts &&  <ListPosts posts={posts} />}
                    {/* {users === null ? "" : <ListPosts posts={posts} />} */}


                </div>
            </div>

        </>
    )
}
export default IndexPosts;