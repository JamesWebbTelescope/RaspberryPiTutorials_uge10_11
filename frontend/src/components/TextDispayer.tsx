import React from "react";
import {GetExternal} from "../services/apiService";
import DOMPurify from "dompurify";

let htmlref: string = ""

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{

    fetchData = async() => {
        const result = await GetExternal(this.props.url, this.props.tutorial)
        const res = result.pop()
        if(res)
        {
            const data = res.html
            return data
        }
        else
        {
            return ""
        }
        // Example: Extract all text from the body

    }

    async componentDidMount() {
        htmlref = await this.fetchData()
        console.log("Getting text from websites")
        htmlref = htmlref.replaceAll('\n', '')
        console.log(htmlref)
}

    render() {
        this.componentDidMount()
        const cleanHTML = DOMPurify.sanitize(htmlref.toString(), {USE_PROFILES: {html: true}});
        console.log("Length of HTML")
        console.log(cleanHTML)
        return (
        <div>
            <h1>React Render HTML String</h1>
            {/* Render sanitized HTML */}
            <div dangerouslySetInnerHTML={{ __html: cleanHTML}} />
        </div>
  );
    }
}

export default TextRender;