import React, { useState } from 'react'

const Search = (props) => {
    const [value, setValue] = useState("")
    const handleSearch = (e) => {
        e.preventDefault();
        props.setProgress(0);
        props.onSearch(value);
        props.setProgress(100);
    }

    const handleKeyPress = (e) => {
        if(e.key==="Enter") {
            handleSearch(e);
            setValue("");
        }

    }
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">DailyNews 📰</a>
                    <form className="d-flex" role="search">
                        <input onKeyPress={handleKeyPress} value={value} onChange={(e)=>setValue(e.target.value)} className="form-control me-2" type="search" placeholder="Serach Category" aria-label="Search" />
                        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Search
