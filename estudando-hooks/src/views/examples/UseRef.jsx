import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const merge = function(s1, s2){
    return [...s1].map((e, i) => `${e}${s2[i] || '' }`).join('')
}

const UseRef = (props) => {

    //Ex 01---------------------------------
    const[value1, setValue1] = useState('')
    const count = useRef(0) 

    useEffect(function(){
        count.current++
        myInput2.current.focus()
    },[value1]) 

    //Ex 02----------------------------------

    const [value2, setValue2] = useState('')
    const myInput1 =  useRef(null)
    const myInput2 =  useRef(null)

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    },[value2]) 

    //--------------------------------------- 

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <sectionTitle title='Exercício #01'></sectionTitle>

            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e =>setValue1(e.target.value)} />
            </div>

            <sectionTitle title='Exercício #02'></sectionTitle>
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e=>setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
