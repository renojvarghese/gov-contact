
import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = 'YOURAPIKEYHERE';
let gapi;
export class SearchForm extends Component {

    loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
        gapi = window.gapi;
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeApi();
    }
    render() {
        // axios.get('https://www.googleapis.com/civicinfo/v2/representatives?query=360%20Grassy%20Hill%20Road').then( res => console.log(res));
        return (
            <div>
                <h1>Hello</h1>

            </div>
        );
    }
}
