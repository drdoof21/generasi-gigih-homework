
import './App.css';
import data from "./datadummy";
import react from 'react';

class App extends react.Component{
  render() {
    return (
      <div>
        <h1>Create Playlist</h1>
  
          <label>Title</label><br/>
          <input type="text" /><br/>
          <label>Description</label><br/>
          <input type="text"/><br/>
          <button id="button">Submit</button>
          <div style={{border: "black solid 2px", margin: "20px 20px",padding: "10px"}}>
          <img src={data.album.images[0].url}/><br/>
          <label id="lTitle">{data.name}</label><br/>
          <label id="lArtist">{data.artists[0].name}</label><br/>
          <label id="lAlbum"></label>{data.album.name}<br/>
          <button id="pencetan" onClick={this.isiSemua}>Button</button>
          </div>
      </div>
    );
    }
    // isiSemua() {
    //   const trackTitleDOM = document.getElementById('lTitle')
    //   const coba = 'hehe';
    //   trackTitleDOM.innerHTML = {coba};
    // } 
  
}
// react.findDOMNode(this.refs.) click(function(){



export default App;
