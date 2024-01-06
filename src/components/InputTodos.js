
import React , {Fragment ,useState}from 'react'

const InputTodo = () => {

    const [description , setDescription] = useState("")
    //This line uses the useState hook to create a state variable description and a function setDescription to update that state.
    // The initial value of description is an empty string ("").

    const onSubmitForm = async (e) =>{
        e.preventDefault();
        if (description.trim() === "") {
            alert("Todo description cannot be empty");
            return;
        }
    
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                "method":"POST",
                "headers":{ "Content-Type" : "application/json"},
                "body": JSON.stringify(body)
         })
            window.location = '/';
        } 
            
        catch (err) {
            console.error(err.message)
        }
    }

        //This function is called when the form is submitted. It prevents the default form submission (e.preventDefault()), indicating that you want to handle the submission manually.
        //It creates an object body containing the description from the component's state.
        //It uses the fetch function to make a POST request to "http://localhost:5000/todos" with the specified headers and the JSON-serialized body.
        //The response from the server is logged to the console.

    return <Fragment>
        <h1 className='text-center mt-5'>PERN Todo List</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
            <input type="text"  className='form-control' value={description} onChange={
                e => setDescription(e.target.value)
            }/>
            <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
     
}
export default InputTodo;

// This is the JSX returned by the InputTodo component.
// It includes an <h1> heading, a <form> with an input field (controlled by the description state) and a submit button.
// The onSubmit event of the form is set to the onSubmitForm function defined earlier.


// Explanation of CSS Classes:

// text-center: Centers the text horizontally.
// mt-5: Sets a top margin of 5 units.
// d-flex: Sets the display property to flex, enabling flexible box layout.