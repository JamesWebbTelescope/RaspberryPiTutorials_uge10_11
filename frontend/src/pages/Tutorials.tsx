import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { GetTutorials } from "../services/apiService";
import { Dropdown } from "react-bootstrap";

interface DisplayTutorial {
    id: number;
    name: string;
    link: string;
}

export default function TutorialsPage() {
    const [tutorial, setTutorialData] = useState<DisplayTutorial[]>([])

    const API_URL = import.meta.env.VITE_API_URL;
    const results: DisplayTutorial[] = [];
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
        <Dropdown.Menu show>
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
        <VideoPlayer/>
    </Layout>
}