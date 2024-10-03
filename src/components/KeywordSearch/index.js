import { Component } from "react";

import sampleData from "../../data/sampleData"

import "./index.css"

class KeywordSearch extends Component {

  state = {url:'',keyword:'',result:''}

  changeUrl = (event) => {
    this.setState({url:event.target.value})
  }

  changeText = (event) => {
    this.setState({keyword:event.target.value})
  }
 
  handleSearch = () => {
    const {url,keyword} = this.state;
    const foundItem = sampleData.find(
      (item) => item.url === url && item.keyword.toLowerCase().includes(keyword.toLowerCase())
    )

    if (foundItem) {
      this.setState({result:`Potential piracy detected at ${url}`});
    } else {
      this.setState({result:'No piracy detected.'});
    }
  };

  render() {
    const { url, keyword, result } = this.state;

    return (
      <div className="search-container">
        <h1 className="heading">Piracy Detection</h1>
        <input
          type="text"
          name="url"
          className="input-box"
          placeholder="Enter URL"
          value={url}
          onChange={this.changeUrl}
        />
        <input
          type="text"
          name="keyword"
          className="input-box"
          placeholder="Enter keyword"
          value={keyword}
          onChange={this.changeText}
        />
        <button onClick={this.handleSearch} className="search-btn">Search</button>

        <div>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default KeywordSearch;
