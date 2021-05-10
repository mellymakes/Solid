import React, {useState, useEffect} from 'react'
import Card from './Card'
import Loading from '../../Loading'
import './scss/cards.scss'

export default function Cards() {

    const [plan, setPlan] = useState([])

    const [isLoading, setLoading] = useState(false)

    async function fetching (link){

        setLoading(true)

        const data = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        const newarr = []


        data.forEach(d => {

            const {requirements, id, name, check, price} = d

            const newarrobj = []
            
            requirements.forEach(dr => newarrobj.push({dr}))

            check.forEach((dc, index) => newarrobj[index].check = dc)

            newarr.push({id, name, requ: newarrobj, price})

        })

        // console.log(newarr);

        setPlan(newarr)

        setLoading(false)

    }
    async function refetch (link){
        
        const data = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        const newarr = []


        data.forEach(d => {

            const {requirements, id, name, check, price} = d

            const newarrobj = []
            
            requirements.forEach(dr => newarrobj.push({dr}))

            check.forEach((dc, index) => newarrobj[index].check = dc)

            newarr.push({id, name, requ: newarrobj, price})

        })

        // console.log(newarr);

        setPlan(newarr)

        setLoading(false)

    }

    useEffect(() =>{
        
        fetching('http://localhost:9999/hire')



    }, [])
    useEffect(() =>{
        
        if(!isLoading){return}

       const inter = setInterval(() => {refetch('http://localhost:9999/hire')}, 1000)


        return () =>{
            clearInterval(inter)
        }


    })

    const aBunchOfCards = plan.map(data => <Card obj={data}/>)

    return (
        <div className="mhc" id="cardsect">
            <Loading name="Plans" active={isLoading}/>
            <div className="con-90-res">
                <div className="mhci">
                 {aBunchOfCards}
                </div>
            </div>
        </div>
    )
}










// const newarr = []


// data.forEach(d => {

//     const {requirements, id, name, check, price} = d

//     const newarrobj = []
    
//     requirements.forEach(dr => newarrobj.push({dr}))

//     check.forEach((dc, index) => newarrobj[index].check = dc)

//     newarr.push({id, name, requ: newarrobj, price})

// })

// // console.log(newarr);

// setPlan(newarr)