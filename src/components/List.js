import React from 'react'
import Flist from "./Flist";

function List({list,setList,setTitle,setDesc}) {




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
