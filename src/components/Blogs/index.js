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
        <h2>All Blogs</h2>
        <div>
          {!isLoading ? (
            articles.map(article => {
              const { description, title, url } = article;
              return (
                <div key={title}>
                    <ul style={{border:'1px solid'}}>
                    <li><p>{title}</p></li> 
                    <p>{description}</p>
                    <a target='_blank' href={article.url}>{url}</a>
                    </ul>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default blog;