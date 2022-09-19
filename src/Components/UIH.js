import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports'
import { update } from '../redux/UserSlice'
export default function UIH() {
     const [name, setName] = useState()
     const [email1, setEmail] = useState()
     const email=useSelector(state=>state.user.email)
     const dispatch =useDispatch()
     const handleSubmit=()=>{
          console.log("The Name is ",name)
          console.log("The Email is",email1)
          const email=email1
          dispatch(update(email))
     }
     return (
          <>
          <div>یہاں پر میں دوسرے کمپونینٹ کا ڈیٹا شو کروا راہا ہوں</div>
          <b>2:{email}</b>
          <input placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
          <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
          <button onClick={handleSubmit}>Submit</button>
          </>
        )
}
