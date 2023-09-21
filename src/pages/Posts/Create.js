import { useState } from "react";

const CreatePost = () => {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,body);

    }
    return (
        <>
            <div className="container mt-6">
                <div className="row g-3">
                    <div className="col-md-6">
                        <h3>Create Post :</h3>

                        <form  onSubmit={(e) => handleSubmit(e)}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Body</label>
                                <textarea className="form-control" rows="3" onChange={(e)=>setBody(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreatePost