import React from "react"
import {Link, useSearchParams} from "react-router-dom"

/**
 * {
    * id: "1", 
    * name: "Modest Explorer", 
    * price: 60, 
    * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
    * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
    * type: "simple"
 * }
 */


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
        
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className="van-type simple" onClick={() => setSearchParams({type:"simple"})}>Simple</button>
                <button className="van-type luxury" onClick={() => setSearchParams({type:"luxury"})}>Luxury</button>
                <button className="van-type rugged" onClick={() => setSearchParams({type:"rugged"})}>Rugged</button>
                <button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}