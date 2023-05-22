import {React,useState} from "react";

const TodoApp = ()=>{
    const [addItem,setAddItem] = useState([])
    const [item,setItem] = useState("")
    const [editItem,seteditItem] = useState(false)
    const [ItemIndex,setItemIndex] = useState("")
    
    const AddItem=(e)=>{
        e.preventDefault()
        setAddItem(prevItems => [...prevItems, item])

        setItem('')
    }
    const changeHandler =(event)=>{
        
        setItem(event.target.value)
    } 
    
    const deleteItemHandler = ()=>{
        setAddItem([])
    }

    const deleteSingleItem =(e)=>{
        
        let copiedItems = [...addItem];
        let index = addItem.indexOf(e)
        
        copiedItems.splice(index,1)
        setAddItem(copiedItems)

        
    }

    const EditSingleItem=(e)=>{
        seteditItem(true)
        setItem(e)
        setItemIndex(e)
    }

    const editItemHandler=(e)=>{
        e.preventDefault()
        let index = addItem.indexOf(ItemIndex)
        let newArr = [...addItem]
        console.log(newArr)
        newArr[index] = item
        setAddItem(newArr)

        setItem('')
        seteditItem(false)
    }
    
    console.log(addItem)
    return(
        <>
        <form>
            {editItem?<input type="text" name='Itemname' onChange={changeHandler} value={item}></input>:<input type="text" name='Itemname' onChange={changeHandler} value={item}></input>}
            {editItem?<button type="submit" onClick={editItemHandler} value="submit" >EDIT</button>:<button type="submit" onClick={AddItem} value="submit" >Add</button>}
        </form>


        <div>{addItem.length >0 && (
           <button onClick={deleteItemHandler}>Delete All</button>
        ) }</div>
        
        <div>{addItem.length >0 && (
           addItem.map((item,index)=> (<div>
            <div key ={index}>{item}</div>
            <button onClick={() => deleteSingleItem(item)}>Delete</button>
            <button onClick={()=>EditSingleItem(item)}>Edit</button>
            </div>
           ))
        ) }</div>
        
        </>
    )

}
 
export default TodoApp