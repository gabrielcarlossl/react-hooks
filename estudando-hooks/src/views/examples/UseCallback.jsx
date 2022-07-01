import PageTitle from '../../components/layout/PageTitle'
import React, { useState } from 'react'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)
    function inc(delta){
        setCount(count+delta)
    }
    
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className='text'>{count}</span>
                <UseCallbackButtons inc={inc}></UseCallbackButtons>
            </div>
        </div>
    )
}

export default UseCallback
