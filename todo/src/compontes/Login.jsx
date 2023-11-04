import { useReducer } from 'react'
import FormmInput from './FormInput'

function LoginFrom(){
    useReducer(emailReducer)
    return(
      <FormmInput type = 'email' onChange = {}/>
    )
}

export default LoginFrom