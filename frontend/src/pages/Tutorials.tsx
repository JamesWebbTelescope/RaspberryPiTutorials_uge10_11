import Layout from "../components/Layout";
import { useState, useEffect, useRef } from "react";
import VideoPlayer from "../components/VideoPlayer";
import TextRender from "../components/TextDispayer";
import { GetTutorials } from "../services/apiService";
import Dropdown from "react-bootstrap/Dropdown";

interface DisplayTutorial {
    id: number;
    name: string;
    link: string;
}

const holoLinkClass = `
    relative
    px-4 py-2
    text-green
    font-semibold
    rounded-lg
    transition-all
    duration-300
    hover:text-green-400
    hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]
    before:absolute
    before:inset-0
    before:rounded
    before:bg-green-400
    before:opacity-20
    before:blur-xl
    before:scale-110
    before:transition-all
    before:duration-300
    hover:before:opacity-50
    hover:before:scale-80
    before:pointer-events-none
  `;

export default function TutorialsPage() {
    let link = useRef("")
    const [tutorials, setTutorialData] = useState<DisplayTutorial[]>([])
    const [display, updateDisplay] = useState(false)

    const API_URL = import.meta.env.VITE_API_URL;
    const results: DisplayTutorial[] = [];

    const setDisplay = async (url: string) => {
        let result = url.includes("youtube")
        console.log(result)
        if(result == true)
        {
            link.current = url
            console.log(url)
            console.log("This is a youtube link")
            return ([
                updateDisplay(false)])
        }
        else if(result == false)
        {
            link.current = url
            console.log(url)
            console.log("Nothing has happened yet")
            return ([updateDisplay(true)])
        }

    }

    useEffect(() => {
            const fetchData = async () => {
                const tutorials = await GetTutorials(API_URL);
                console.log("Welcome to the tutorials page")
                for(const tutorial of tutorials){
                    console.log(`Getting all tutorials`)
                    const tut = tutorials.find(item => item.id === tutorial.id);
                    if(tut){
                        results.push({
                                    id: tut.id,
                                    name: tut.name,
                                    link: tut.link
                                });
                            console.log(tut.id)
                            console.log(tut.name)
                            console.log(tut.link)
                            }
                    }           
                setTutorialData(results);
            };
            fetchData();
        }, []);

    return <Layout>
        <div className="overlay-box relative text-center bg-red-800/70 text-green-300 uppercase text-sm font-semibold tracking-wide">
            <Dropdown>
                <Dropdown.Header>Tutorials</Dropdown.Header>
                    {tutorials.map((item, index) => (
                        <Dropdown.Menu show key={index}>
                        <Dropdown.Item className={holoLinkClass} onClick={() => {
                                    // clearToken();
                                    setDisplay(item.link)
                                    updateDisplay(!display)
                                }}>{item.name}
                        </Dropdown.Item>
                        </Dropdown.Menu>
                        ))}
            </Dropdown>
        </div>
        <div className="relative text-center">
            {display ? <VideoPlayer url={link.current}/>: < TextRender url ={API_URL} tutorial={link.current} />}
        </div>
    </Layout>
}