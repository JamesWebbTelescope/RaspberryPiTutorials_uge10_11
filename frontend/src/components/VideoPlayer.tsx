import React, { useRef } from "react";
 import YouTube from "react-youtube";

const id = useRef("qk_3SwXmpGM")

interface YoutubeProps {
  url: string
 }

 class MovieClip extends React.Component<YoutubeProps> {
      findId(url: string){
        let index_start = url.indexOf("=")+1
        let index_end = url.length
        id.current = url.slice(index_start, index_end)
        console.log(id.current)
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
    
      return <YouTube videoId={id.current} opts={options} onReady={this._onReady} id="video" />;
    }
  
    _onReady(event: any) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;