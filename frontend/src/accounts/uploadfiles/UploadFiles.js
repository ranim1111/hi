import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";

export default class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(files) {
    try {
      console.log(files);
      //<Suspense fallback={<h1>Chargement du profil...</h1>}></Suspense>;
      axios({
        method: "POST",
        url: "http://localhost:5000/uploads",
        data: { files },
      }).then((response) => {
        console.log(" success", response);
      });
    } catch (error) {
      console.log("error");
    }

    /*axios({
      //requete
      method: "POST",
      url: "http://localhost:5000/uploads",
      data: {
        //donnees de la requete
        files,
      },
    }).then((response) => {
      console.log(" success", response);
    })*/

    this.setState({
      files: files,
    });
  }

  render() {
    return (
      <div className="upload">
        <DropzoneArea
          onChange={this.handleChange.bind(this)}
          dropzoneText="Drag and drop a file OR Click here"
        />
      </div>
    );
  }
}
