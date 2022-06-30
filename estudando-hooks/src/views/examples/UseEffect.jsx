import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//Ex 01
function calcFatorial(num){
    const n = parseInt(num)
    if(n <0) return -1
    if (n === 0) return 1

    return calcFatorial(n-1)*n
}

//EX 02
function parImp(num){
    const n = parseInt(num)
    if(n % 2 === 0) return 'Par'
    else return 'Impar'
}

const UseEffect = (props) => {

    //Ex 01 ---------------------------------------
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect( function() {
        setFatorial(calcFatorial(number))
    },[number])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title= 'Fatorial grande demais!'
        }
    },[fatorial])

    //Ex 02 ----------------------------------------------
    const [numero, setNumero] = useState(1)
    const [Epar, setEpar] = useState('Impar')

    useEffect(function(){
        setEpar(parImp(numero))
    },[numero])

    //Status numero Fatorial -----------------------------

    const [status, setStatus] = useState('Ímpar')

    useEffect(function(){
        setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
    },[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercício #01'></SectionTitle>
            <div className='center'>

                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                
                <input type="number" className="input" value={number} onChange={e=> setNumber(e.target.value)} />
            </div>

            <SectionTitle title='Exercício #02'></SectionTitle>
                <div className="center">
                    <div>
                    <span className="text">O número abaixo é: </span>
                    <span className="text red">{Epar}</span>
                    </div>

                    <input type="number" className="input" value={numero} onChange={e => setNumero(e.target.value)} />
                    
                </div>

                <SectionTitle title='Status do Número do Fatorial'></SectionTitle>
                    <div className="center">
                        <div>
                        <span className="text">Fatorial é um número: </span>
                        <span className="text red">{status}</span>
                        </div>
                        
                    </div>


        </div>
    )
}

export default UseEffect
