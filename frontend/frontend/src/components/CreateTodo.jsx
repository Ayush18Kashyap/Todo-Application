export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return <div>
        <input style={{
            margin: "10px",
            padding: "10px",
        }} type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;  // get the current value
            setDescription(e.target.value); //input box update the state of title
        }
        }></input> <br />
        


        <input style={{
            margin: "10px",
            padding: "10px",
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;  // get the current value
            setDescription(e.target.value); // input box update the state of description
        }
        }> </input> <br />


        <button style={{
            margin: "10px",
            padding: "10px",
        }} onClick={function () {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringyfy({   // body stringfy is how fetch works
                    title: title,
                    description: description
                }),
                headers: {
                    "contentType": "application/json"  // fetch doen't automatically tell that this is json data
                }
            }
            )
        }}>Add a Todo</button>
    </div>

} 