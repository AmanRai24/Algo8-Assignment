import React from "react";
import axios from "axios";

class blog extends React.Component {
    state = {
    articles: [],
    isLoading: true,
    errors: null
};


getArticles() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=india&apiKey=c66d28a440d54982b5ee271c8bc0299c"
      )
      .then(response =>
        response.data.articles.map(article => ({
       
          title: `${article.title}`,
          description: `${article.description}`,
          url: `${article.url}`

        }))
      )
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }


render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <p style={{margin:'14px', fontSize:'26px' , fontWeight:'bolder', fontFamily:'cursive'}}>All Blogs</p>
        <div>
          {!isLoading ? (
            articles.map(article => {
              const { description, title, url } = article;
              return (
                <div key={title}>
                    <ul style={{border:'1px solid', boxShadow:'12px 12px 2px 1px rgba(0, 0, 255, .2)' , margin:'20px' , paddingBottom:'20px'}}>
                    <li><p style={{color:'green'}}>{title}</p></li> 
                    <p>{description}</p>
                    <button style={{padding:'5px'}}><a target='_blank' href={article.url} style={{textDecoration:'none', color:'red'}}>ReadMore</a></button>
                    </ul>
                </div>
              );
            })
          ) : (
            <p style={{color:'red',textAlign:'center', fontSize:'30px', height:'57vh'}}>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default blog;