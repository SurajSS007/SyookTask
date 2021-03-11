import React from 'react'
import "./list.css";

function Flist({list,title,desc,setList,id,setDesc,setTitle}) {

    const modifyHandler = (e) =>{


        let a = JSON.parse(localStorage.getItem('list'));
        let x = a.filter((el) =>el.id == id )
        setTitle(x[0].title);
        setDesc(x[0].desc);
        const index = a.findIndex(list =>  list.id === id);
        a.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(a));
        let b = JSON.parse(localStorage.getItem('list'));
        setList(b)

    }
    const deleteHandler = (e) => {
        setList(list.filter((el) =>el.id !== id ))
    }


    return (
        <div className="container">
        <ul>
            <li className="title">{title}</li>
        </ul>
        
            <p className="desc">{desc}</p>

    

            <button onClick={deleteHandler} className="btn">Delete</button>
            <button onClick={modifyHandler} className="btn">Modify</button>

        </div>
    )
}

export default Flist
