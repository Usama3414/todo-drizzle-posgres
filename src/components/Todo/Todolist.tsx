"use client"
import {Input} from '../ui/input'
import React,{useState} from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

type Props = {}

export default function Todolist ({} : Props ) {

  const [todoItem, settodolist] = useState("")
   
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    settodolist(e.currentTarget.value)
  }

  const handleAddtodo = async () => {
    const response = await fetch("api/todo" , {
      method : "POST",
      body : JSON.stringify({todoItem})
    })

    const res = await response.json()
    console.log(res)
    
  } 

   return (
    <div className='flex justify-center items-center'>
      <div className='w-[60%] bg-gray-200 shadow-md rounded-md p-7'>
        <div className='flex justify-center items-end gap-6 w-full'>

        <div className='w-[70%]'>
            <Input id='todoItem'
             placeholder='Enter Todo here ' 
             value={todoItem} 
             onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
        <Button onClick={handleAddtodo}>
          <PlusIcon size={18}/>
           Add Todo
        </Button>
        </div>
      </div>
    </div>
   </div>
  )
}


