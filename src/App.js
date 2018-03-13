import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EPA_logo from "./ressources/EPA_logo.png"
import search_icon from "./ressources/search.png";
import checkbox_icon from "./ressources/checkbox.png";
import download_icon from "./ressources/download.png";
import view_icon from "./ressources/view.png";
import logout_icon from "./ressources/logout.png";
import folder_icon from "./ressources/folder.png";
import video_icon from "./ressources/video.png";
import pdf_icon from "./ressources/pdf.png";
import doc_icon from "./ressources/doc.png";
import doc_big_icon from "./ressources/doc_big.png";
import excel_icon from "./ressources/xls.png"

class App extends Component {

  state={
    data : [
      {name : "Etape 1",
          type :"dir",
          content : [
                      {name : "Autorisation",
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

      let icon = "";
      if (line.type==="dir"){
        icon=folder_icon
      }
      // Icône dossier
      else if (line.type===""){
        icon=doc_icon
      }
      // Icône doc (Word)
      else if (line.type===""){
        icon=excel_icon
      }
      // Icône xls (Excel)
      else if (line.type===""){
        icon=pdf_icon
      }
      // Icône pdf

      column.push(
        <div className="line" onClick={()=>this.openContent(index)}>
          <input className="checkbox" type="checkbox"/>
          <img className="icon" src={icon} />

          <h3> {line.name} </h3>
        </div>
      )
    })

    let columntwo = []

    this.state.columntwo.forEach((line,index)=>{
      columntwo.push(
        <div className="line" onClick={()=>this.openFile(line)}>
          <input className="checkbox" type="checkbox"/>
          <img className="icon" src={line.type === "dir" ?  "http://www.icone-png.com/png/37/36873.png" : "https://sendeyo.com/images/file.png"}/>
          <h3> {line.name} </h3>
        </div>
      )
    })

    let file = []

    if (this.state.file !== undefined ){
      file =
      <div className="filezoom">
        <div>
          <img className="picto" src="https://sendeyo.com/images/file.png"/>
          <h3> {this.state.file.name} </h3>
        </div>
        <div>
          <button><img src={view_icon}/> Ouvrir</button>
          <br/>
          <button><img src={download_icon}/> Telecharger</button>
        </div>
      </div>
    }

    return (
      <div className="App">
        <div className="header">
          <img className=" logo" src={EPA_logo}/>
          <button className="logout"><img src={logout_icon}/>Se déconnecter</button>
        </div>
        <div className="column">{column}</div>
        <div className={this.state.columntwo.length !== 0? "column column2" : "empty-column"}>{columntwo}</div>
        <div className={this.state.file !== undefined ? "column column3" : "empty-column"}>{file}</div>
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
