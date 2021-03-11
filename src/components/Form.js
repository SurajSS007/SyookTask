import React from 'react'
import  './form.css';


function Form({title,setTitle,desc,setDesc,list,setList}) {

    const inputTitleHandler = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value)
    }
    const inputDescHandler = (e) => {
        console.log(e.target.value);
        setDesc(e.target.value)
    }
 
    const submitHandler = (e) =>{
        e.preventDefault()

        let a = JSON.parse(localStorage.getItem('list'));

        var filtered = a.filter((el) => el.title === title)

         if(filtered.length !== 0){
            alert("You already have it")
        }else{
            setList([...list,{title:title,desc:desc,id:Math.random()*1000}
            ])
            setTitle("");
            setDesc("");
        }
   
   
    }
    return (
        <div className="main-form-container">
        <h1>Simple Blog List</h1>
            <div>
                <label>Title</label>
                <input value={title} onChange={inputTitleHandler} type="text"/>
            </div>
            <div>
                <label>Description</label>
                <textarea value={desc} onChange={inputDescHandler} type="text"/>
            </div>
                 <button onClick={submitHandler} className="fbtn">Add</button>
        </div>
    )
}

export default Form
