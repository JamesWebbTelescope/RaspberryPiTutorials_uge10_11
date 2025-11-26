import React from "react";
import { GetExternal } from "../services/apiService";

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{
    
    fetchData = async() =>  {
        const res = await GetExternal(this.props.url, this.props.tutorial);
        const htmlString = await res.text;

        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;

    }

    render() {
        const htmlString = this.fetchData().then((html) => {return html})
        console.log(htmlString)
        return <div dangerouslySetInnerHTML={{ __html: htmlString}}></div>
    }
}

export default TextRender;