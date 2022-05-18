import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const Homepage = () => {
    const [todos, setToDos] = useState([])
    const addNote = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const todo = {
            title: title,
            description: description
        }
        // Post Data From Here
        fetch('https://zaman-todo-app.herokuapp.com/addtodo', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));

        e.target.reset()
    }
    // Get Data From Here
    useEffect(() => {
        fetch('https://zaman-todo-app.herokuapp.com/alltodo')
            .then(res => res.json())
            .then(data => setToDos(data))

    }, [todos])
    // Completed To Do Item
    const CompletedTodo = (id) => {
        fetch(`https://zaman-todo-app.herokuapp.com/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: 'true' }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json?.acknowledged) {
                    toast.success('Task Completed')
                }
            });
    }

    // Delete To Do item
    const deleteTodo = (id) => {
        const sure = window.confirm('Are You Sure To Delete ?')
        if (sure) {
            fetch(`https://zaman-todo-app.herokuapp.com/todo/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }
    return (
        <div className='homepage'>

            <div className='header'>
                <img src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU" alt="" />
                <h2>To Do List</h2>
            </div>
            <button onClick={() => signOut(auth)} className='signout'>Signout</button>
            <div>

            </div>



            <form onSubmit={addNote} className="input">
                <input name='title' type="text" placeholder='Title' required />
                <textarea name='description' placeholder='Description' id="" required ></textarea>
                <button type='submit' className='addbtn'>Add Note</button>
            </form>
            <div className='display'>
                <div className='header'>
                    <h2>All Notes</h2>
                </div>

                {
                    todos.map(todo =>
                        <div key={todo?._id} className='note'>
                            <div className='titlediv'>
                                <h2 className={`title ${todo?.completed ? "completed" : ""}`}>{todo.title}</h2>
                                <div className='btn-groupe'>
                                    <div onClick={() => CompletedTodo(todo?._id)} className='del'>
                                        <img src="https://img.icons8.com/cotton/344/checkmark.png" alt="" />
                                    </div>
                                    <div onClick={() => deleteTodo(todo?._id)} className='del'>
                                        <img src="https://img.icons8.com/plasticine/344/filled-trash.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className='Description'>{todo?.description}</p>

                        </div>
                    )}


            </div>
            <ToastContainer />

        </div>
    );
};

export default Homepage;