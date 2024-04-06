import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin'
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3571eda9e5e24821a7dfb68be6d87628&page=${page}&pageSize=${props.Pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  },[]);

  const Handleprevclick = async () => {
    setpage(page - 1);
    updateNews();

  }
  const Handlenextclick = async () => {
    console.log("Next is clicked");
    setpage(page + 1);
    updateNews();
  }

  return (
    <div className="container my-3">
      <h1 className='text-center' style={{marginTop:'90px'}}>NewsMonkey-Headlines</h1>
      {loading && <Spin />}
      <div className="row">
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={Handleprevclick}>&laquo; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.Pagesize)} type="button" className="btn btn-dark" onClick={Handlenextclick}>Next &raquo;</button>
      </div>
    </div>
  )
}


export default News
