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

    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            }
            else{
                prevParams.set(key ,value)
            }
            return prevParams
        })
    }


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
                {typeFilter ? <button className="van-type clear-filters" onClick={() => handleFilterChange("type", null)}>Clear</button> : null}
                
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}