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
        console.log(htmlref)
}

    render() {
        this.componentDidMount()
        const cleanHTML = DOMPurify.sanitize(htmlref.toString());
        console.log(cleanHTML.length)
        return (
        <div>
            <h1>React Render HTML String</h1>
            {/* Render sanitized HTML */}
            <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
        </div>
  );
    }
}

export default TextRender;