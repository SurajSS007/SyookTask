import React,{useState,useEffect} from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
   const [title,setTitle] = useState('');
   const [desc,setDesc] = useState('');
   const [list,setList]= useState([])
   const [filter, setFilter] = useState('')

   useEffect(() => {
    getLocalTodos()

  }, [])
   
  useEffect(() => {
    saveLocalTodos()
 
  }, [list])

    
  const style = {
    color : 'black',
    padding:'5px'
}

  const searchhandler = (e) => {
    console.log(e.target.value);
    // console.log(list);
    const filter =list.filter((el) =>el.title == e.target.value )
    console.log(filter)
    setFilter(filter)
  }


   const saveLocalTodos = ()=>{
       localStorage.setItem('list',JSON.stringify(list))
     }


  const getLocalTodos = () => {
    if(localStorage.getItem('list') === null){
      localStorage.setItem('list',JSON.stringify([]));
    }else{
      let todoLocal  = JSON.parse(localStorage.getItem('list'));
      // console.log(todoLocal);
      setList(todoLocal);
    }
  }

  
  return (
    <div className="App">
      <Form list={list} setList={setList} desc={desc} setDesc={setDesc} title={title} setTitle={setTitle}/>
      <h1 style={style}>Lists</h1>
      <input style={style} onChange={searchhandler} type="text" placeholder="Search.."/>
      <List filter={filter} setTitle={setTitle} setDesc={setDesc} list={list} setList={setList} />
    </div>
  );
}

export default App;
