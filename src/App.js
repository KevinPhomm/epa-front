import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    data : [
      {name : "Etape 1",
          type :"dir",
          content : [
                      {name : "Authorisation",
                        type : "file",
                        extension : "pdf"}
                    ]
      },
      {name : "Etape 2",
          type :"dir",
          content : [
                      {name : "Excel",
                        type : "file",
                        extension : "pdf"}
                    ]
      },
      {name : "Etape 3",
          type :"dir",
          content : [
                      {name : "Certificat",
                        type : "file",
                        extension : "pdf"}
                    ]

      },
    ],

    columnone : [],
    columntwo : [],
    file : undefined,



  }



  render() {

    let column = []

    this.state.data.forEach((line,index)=>{
      column.push(
        <div className="line" onClick={()=>this.openContent(index)}>
          <img className="icon" src={line.type === "dir" ?  "http://www.icone-png.com/png/37/36873.png" : "https://sendeyo.com/images/file.png"}/>

          <input type="checkbox"/>
          <h3> {line.name} </h3>
        </div>
      )
    })

    let columntwo = []

    this.state.columntwo.forEach((line,index)=>{
      columntwo.push(
        <div className="line" onClick={()=>this.openFile(line)}>
          <img className="icon" src={line.type === "dir" ?  "http://www.icone-png.com/png/37/36873.png" : "https://sendeyo.com/images/file.png"}/>
          <input type="checkbox"/>
          <h3> {line.name} </h3>
        </div>
      )
    })

    let file = []

    if (this.state.file !== undefined ){
      file =
      <div className="filezoom">
      <img className="picto" src="https://sendeyo.com/images/file.png"/>
      <h3> {this.state.file.name} </h3>
      <button>Ouvrir</button>
      <button>Telecharger</button>
      </div>
    }

    return (
      <div className="App">
        <div className="header">
          <img className=" logo" src="http://www.cegid-education.com/wp-content/uploads/2017/01/Logo-EPA-AURA-Q.png"/>
          <button className="logout">Se déconnecter</button>
        </div>
        <div className="column">{column}</div>
        <div className={this.state.columntwo.length !== 0? "column greyer" : "empty-column"}>{columntwo}</div>
        <div className={this.state.file !== undefined ? "column greyeryer" : "empty-column"}>{file}</div>
      </div>
    );
  }



/** PRIVATE METHODS**/
  openContent(index){
    if (this.state.data[index].content === this.state.columntwo){
      this.setState({
        columntwo : [],
        file : undefined,
      })
    }else{
      this.setState({
        columntwo : this.state.data[index].content,
        file : undefined,
      })

    }
  }

  openFile(file){
    if (file === this.state.file){
      this.setState({
        file : undefined
      })
    }else{
      this.setState({
        file : file
      })

    }
  }


}

export default App;
