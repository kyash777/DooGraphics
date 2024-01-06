import { ButtonGroup,Button,styled } from "@mui/material"
import { useState } from "react"

const Component=styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton=styled(Button)`
    border-radius:50%;
`
const GroupedButton=()=>{

    const addCount=()=>{
        count=count+1;
        setCount(count);
    }

    const decCount=()=>{
        if(count>0){
            count=count-1;
        }
        setCount(count);
    }

    var [count,setCount]=useState(0)
    return (
        <Component>
            <StyledButton onClick={decCount}>-</StyledButton>
            <StyledButton  disabled>{count}</StyledButton>
            <StyledButton onClick={addCount}>+</StyledButton>

        </Component>
    )
}

export default GroupedButton;