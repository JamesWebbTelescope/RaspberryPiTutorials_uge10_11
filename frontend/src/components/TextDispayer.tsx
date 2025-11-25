import React from "react";
import { GetExternal } from "../services/apiService";
import parse from 'html-react-parser';

interface TextProps {
    url: string
    tutorial: string
}

class TextRender extends React.Component<TextProps>{
    fetchData = async() => {
        const res = await GetExternal(this.props.url, this.props.tutorial);
        const htmlString = await res.text;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "application/xhtml+xml");

        // Example: Extract all text from the body
        const extractedText = doc.body.textContent.toString();
        console.log("All extracted text")
        console.log(extractedText)
        console.log(parse(extractedText))
        return parse(extractedText)

    }
    render() {
        //const html = this.fetchData()
        return <div></div>
    }
}

export default TextRender;