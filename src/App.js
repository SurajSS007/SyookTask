import React,{useState,useEffect} from "react";
import Form from "./components/Form";
import List from "./components/List";
function App() {
   const [title,setTitle] = useState('');
   const [desc,setDesc] = useState('');
   const [list,setList]= useState([])

   useEffect(() => {
    getLocalTodos()

  }, [])
   
  useEffect(() => {
    saveLocalTodos()
 
  }, [list])

    


   const saveLocalTodos = ()=>{
       localStorage.setItem('list',JSON.stringify(list))
     }


  const getLocalTodos = () => {
    if(localStorage.getItem('list') === null){
      localStorage.setItem('list',JSON.stringify([]));
    }else{
      let todoLocal  = JSON.parse(localStorage.getItem('list'));
      setList(todoLocal);
    }
  }

  
  return (
    <div className="App">
      <Form list={list} setList={setList} desc={desc} setDesc={setDesc} title={title} setTitle={setTitle}/>
      <List  setTitle={setTitle} setDesc={setDesc} list={list} setList={setList} />
    </div>
  );
}

export default App;
