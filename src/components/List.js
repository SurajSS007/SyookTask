import React,{useState} from 'react'
import Flist from "./Flist";

function List({list,setList,setTitle,setDesc,filter}) {

    console.log("p",filter);


    return (
        <div>

  
        <ul>
        {
            list.map((lists) => 
                <Flist list={list}
                setTitle={setTitle}
                setDesc={setDesc}
                setList={setList}
                key={lists.id}
                id={lists.id}
                 title={lists.title}
                 desc={lists.desc}
                 
                 />
                )
        }
  
        </ul>
            
        </div>
    )
}

export default List
