import { useState } from "react";

export function CreateTodo (){

    // we create local state variables for title
    const [title, setTitle] = useState ("");
    // and description
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><br/>
        <input id="description" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><br/>
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(async function (res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a Todo</button><br/>
    
    </div>
}
