import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { GetStudents } from "../services/apiService";

interface DisplayStudent {
    id: number;
    firstname: string;
    lastname: string;
    status: string;
}

export default function StudentsPage() {
    const [students, setStudentData] = useState<DisplayStudent[]>([]);

    const API_URL = import.meta.env.VITE_API_URL;
    const results: DisplayStudent[] = [];

    useEffect(() => {
        const fetchData = async () => {
            const students = await GetStudents(API_URL);
            console.log("Welcome to the student page")
            for(const student of students){
                console.log(`Getting all students`)
                const stud = students.find(item => item.id === student.id);
                if(stud){
                    results.push({
                                id: stud.id,
                                firstname: stud.firstname,
                                lastname: stud.lastname,
                                status: stud.status,
                            });
                        console.log(stud.id)
                        console.log(stud.firstname)
                        console.log(stud.lastname)
                        console.log(stud.status)
                        }
                }           
            setStudentData(results);
        };
        fetchData();
    }, []);

    return(
    <Layout children={undefined}>
        
    </Layout>
    )}