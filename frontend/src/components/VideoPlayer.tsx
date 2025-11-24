import React from "react";
 import YouTube from "react-youtube";

interface YoutubeProps {
  url: string
 }

 class MovieClip extends React.Component<YoutubeProps> {
      findId(url: string){
        let index_start = url.indexOf("=")
        let index_end = url.length
        let id = url.slice(index_start, index_end)
        console.log(id)
      }
      render() {
      this.findId(this.props.url)
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
    
      return <YouTube videoId="qk_3SwXmpGM" opts={options} onReady={this._onReady} id="video" />;
    }
  
    _onReady(event: any) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;