import { useEffect, useReducer, useState } from 'react'
import FormInput from './FormInput'


function emailReducer(state,action){
    if(action.type === 'USER_INPUT'){
        return{
           value : action.val , isvalid : action.val.includes('@')
        }
    }

    return {
        ...state
    }
}

function passwordReducer(state ,action){
    if(action.type === 'USER_INPUT'){
        return {
            value : action.val , isvalid : action.val.trim().length > 1 && action.val.trim().length < 15
        }
    }
    return {
        ...state
    }
}

function LoginFrom({setIsLogin}){
    const[formValid,setFormValid] = useState(false)
   
    const [emailState , dispatchEmail] = useReducer(emailReducer,{
        value : '',
        isvalid : false
    })

    const [passwordState , dispatchPassword] = useReducer(passwordReducer,{
        value : '',
        isvalid : false
    })

    function emailChangeHandler(event){
        dispatchEmail({
            type : 'USER_INPUT',
            val : event.target.value
        })
    }

    function passwordChangeHandler(event){
        dispatchPassword({
            type : 'USER_INPUT',
            val : event.target.value
        })
    }

    useEffect(()=>{
        setFormValid(
            emailState.isvalid && passwordState.isvalid
        )
    },[emailState.value,passwordState.value])

    function sumbitHandler(event){
        event.preventDefault()
        setIsLogin(true)
       
        

    }
    return(
      <form action="" onSubmit={sumbitHandler}>
        <label htmlFor="email">Email</label>
        
        <FormInput type = 'email' onChange = {emailChangeHandler} id='email' value={emailState.value}/>
        {!emailState.isvalid && <p>Please Enter a Vaild Email</p>}
        <label htmlFor="password">Password</label>
        <FormInput type = 'password' onChange ={passwordChangeHandler} id = 'password' value = {passwordState.value}/>
        {!passwordState.isvalid && <p>Please Enter a Vaild password</p>}
        <button disabled = {!formValid}>Login</button>
      </form>
    )
}

export default LoginFrom