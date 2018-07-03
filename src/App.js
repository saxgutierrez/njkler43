import React, { Component } from 'react';
import posts from './posts'

class App extends Component {
constructor(){
  super()
  this.state ={
    search:''
  };
}
updateSearch(event){
  this.setState({search:event.target.value.substr(0,20)})
};

renderlist(post,index){
  return(
    <li key={index}><a href={post.url}><img src={post.image }/></a>
    <p>{ post.title }</p></li>
    )
}
  render() {
    let filteredlist = posts.filter((post)=>{
      return post.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;});
      return (
       <div>
          <div className="filter">
           <input type="text" placeholder="Ingresa el término de búsqueda" 
           value={this.state.search} onChange={this.updateSearch.bind(this)} />
          </div>
        <ul>
        {filteredlist.map(this.renderlist)}
        </ul>
      </div>
    )
  }
}
export default App


