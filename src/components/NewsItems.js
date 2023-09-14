import React, { useEffect, useState } from 'react';

const NewsItems = (props) => {
    const [info, setInfo] = useState([]); 
    const {category} = props;
    const fetchData = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=38&apiKey=8de5d7f9badb49719a694cdf46219be5`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setInfo(data.articles); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        props.setProgress(100);
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <div className="text-center justify-content-center align-item-center m-4 row">
                <h1 className="mb-4">📰 {capitalizeFirstLetter(category)}</h1>
                {info.map((curEle, index) => (                 
                    <div key={index} className="border-primary card m-4" style={{ width: "22rem" }}>
                        <img src={!curEle.urlToImage?"https://media.istockphoto.com/id/938753602/pt/vetorial/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=_tHOKiwH86nOsba61PLWIks3WcCpHz5Oyhl1LB8Lid4=":curEle.urlToImage} className="card-img-top" alt={curEle.title} />
                        <div className="card-body">
                            <h5 className="card-title">{curEle.title}</h5>
                            <p className="card-text">{curEle.description}</p>
                            <a href={curEle.url} className="btn btn-dark">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsItems;



