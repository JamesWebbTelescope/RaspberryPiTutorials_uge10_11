import React from "react";

interface TextProps {
    url: string
}

class TextRender extends React.Component<TextProps>{
    render(): React.ReactNode {
        let website = fetch(this.props.url)
        
        console.log(website.finally.toString)
        return 
    }
}

export default TextRender;