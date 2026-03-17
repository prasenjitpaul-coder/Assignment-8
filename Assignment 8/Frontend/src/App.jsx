import { useState } from 'react'
import { Link } from "react-router-dom"
import './index.css'
import useFetch from "../hooks/useFetch.js"

function App() {
  const [task, settask] = useState("");
  const [Edit, setEdit] = useState("");
  const [Editid, setEditid] = useState("");


  const { data, err, setreload } = useFetch("http://localhost:4000/api/task")
  /// toggle
  const toggleline = async (id, complete) => {
    console.log("hi")
    await fetch("http://localhost:4000/api/task/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ complete: !complete }),
    })
    setreload(prev => !prev)
  }
  ////Edit
  const handelEdit = async (id,oldtask) => {
    console.log(Edit)
    setEditid(id)
    if (Editid === id) {
      if (Edit.trim() === "") {

        setEditid("")
        return;

      }



    setEdit(Edit)

    await fetch("http://localhost:4000/api/task/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: Edit })
    });




    setEdit("")
    setEditid("")
    setreload(prev => !prev)
  }else{
    setEdit(oldtask);
    setEditid(id)
  }
  }
  function triger() {
    setEditid("")
  }
  ///create
  const handelCreate = async () => {

    if (!task.trim()) return;

    await fetch("http://localhost:4000/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ task }),

    })
    settask("")
    setreload(prev => !prev)
  }
  const handelDel = async (id) => {
    await fetch("http://localhost:4000/api/task/" + id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ task }),

    })
    setreload(prev => !prev)
  }


  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Task", task);

  }
  return (
    <>
      <div className='bg-amber-200 h-screen flex  items-center justify-center relative'>
        <div className='bg-amber-400 h-4/6 w-3xl rounded-md overflow-hidden shadow-2xl shadow-gray-800'>
          <div className='bg-amber-900 h-18 rounded flex items-center '>
            <h3 className='text-4xl font-extrabold ml-5 '>To-dO-LIST</h3>
          </div>
          <div className='h-120 mx-2  mt-2 '>
            {data.map((task) => (
              <div className='flex bg-orange-500 mb-2  justify-between  rounded shadow-lg shadow-amber-800' key={task._id}>
                <div className='px-2 '>

                  {Editid === task._id ? (
                    <input className={`text-2xl  focus:outline-none border-none  placeholder-gray-900 font-bold ${task.complete ? "line-green " : ""}`}
                      value={Edit} spellCheck="false"
                      autoCorrect="off"
                      autoCapitalize="off"
                      onChange={((e) => setEdit(e.target.value))} />
                  ) : (<p className={`text-2xl font-bold ${task.complete ? "line-green" : ""}`}>
                    {task.task}
                  </p>
                  )}





                  <p className='font-serif text-gray-700'>{new Date(task.createdAt).toLocaleString()}</p>
                </div>
                <div className='flex cursor-pointer  items-center gap-2 mr-2'>
                  <div onClick={() => toggleline(task._id, task.complete)} className='bg-amber-500  px-2 pt-1 rounded-3xl    shadow-lg shadow-amber-800' >
                    <span class="material-symbols-outlined">
                      check
                    </span>
                  </div>
                  <div className='bg-amber-500 cursor-pointer px-2 pt-1 rounded-3xl  shadow-lg shadow-amber-800'>
                    <span onClick={() => handelEdit(task._id)} class="material-symbols-outlined">
                      edit
                    </span>

                  </div>

                  <div className='bg-amber-500 cursor-pointer  px-2 pt-1 rounded-3xl  shadow-lg shadow-amber-800'>
                    <span onClick={() => handelDel(task._id)} class="material-symbols-outlined">
                      delete
                    </span>
                  </div>


                </div>

              </div>
            ))}


          </div>
          <div className='flex '>
            <form action="/" onSubmit={handelSubmit} method='post' className='mx-auto flex  '>
              {/* <label className='text-2xl font-medium  text-gray-900 '>Task</label> */}
              <input className='bg-white py-2.5 rounded-2xl  shadow-md shadow-gray-700 pl-1 pr-8 mx-3'
                value={task}
                onChange={(e) => settask(e.target.value)}
                type="text" name="task" placeholder='Add Task' minLength={3}
                maxLength={13} id="FormInput" />
              <button type='submit' onClick={handelCreate} className='bg-orange-500 cursor-pointer  text-gray-900 text-3xl mx-auto flex px-5 py-2.5 rounded-2xl shadow-md shadow-gray-700'>Create Task</button>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
