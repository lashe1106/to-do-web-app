// import {FC} from "react"
import { useState } from "react"


interface starterProps {
    start?: number
}

const Dashboard = ({start = 0}: starterProps) => {
    const [count, setCount] = useState<number>(start)

    //event: React.MouseEvent<HTMLDivElement>
    const handleClickIncrease = () => {
       return setCount(count + 1)
    }

    const handleClickDecrease = () => {
        if (count > 0) {
            return setCount(count - 1)
        }
    }

    return (
        <div className="bg-white rounded-lg mt-10 w-6/12 h-80  flex flex-col items-center justify-center gap-10 text-white text-center">
            <h1 className="text-lg font-semibold p-4 bg-black w-6/12 rounded-lg cursor-pointer">Dashboard</h1>
            <div className="flex items-center justify-center gap-5 w-8/12">
                <div className="text-lg font-semibold p-4 bg-black w-4/12 rounded-lg cursor-pointer" onClick={handleClickDecrease}>-</div>
                <div className="text-lg font-semibold p-5 bg-white w-4/12 text-black border rounded-full" >{count}</div> 
                <div className="text-lg font-semibold p-4 bg-black w-4/12 rounded-lg cursor-pointer" onClick={handleClickIncrease}>+</div>
            </div>
        </div>
    )
}

export default Dashboard