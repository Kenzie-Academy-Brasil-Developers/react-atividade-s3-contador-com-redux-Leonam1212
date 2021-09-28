import  { useDispatch, useSelector } from "react-redux"
import { addCount, subCount } from "../../store/modules/counter/actions"
import { useState } from "react";
import { Container } from "./style"
const RenderCounter = () => {
    const [num, setNum] = useState(0)
    const dispatch = useDispatch()
    const countNumber = useSelector((state) => state.count);

    const addToCounter = () => {
        dispatch(addCount(num))
    }
    const subToCounter = () => {
        dispatch(subCount(num))
    }

    return (
        <Container>
            <span>{countNumber}</span>
            <div>
                <button onClick = {addToCounter}>+</button>
                <button onClick = {subToCounter}>-</button>
            </div>
        </Container>
    )


}
export default RenderCounter 