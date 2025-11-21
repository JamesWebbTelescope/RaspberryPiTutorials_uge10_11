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
    <Layout >
        <div className="overflow-x-auto rounded-2xl border border-cyan-600/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <h2>Students</h2>


                <table className="min-w-full text-cyan-200">
                <thead className="bg-gray-800/70 text-cyan-300 uppercase text-sm font-semibold tracking-wide">
                    <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">First Name</th>
                    <th className="px-6 py-3 text-left">Last Name</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => (
                    <tr key={index}
                    className="border-b border-cyan-500/20 hover:bg-gray-700/50 transition-colors"
                    >
                        <td className="px-6 py-3 font-medium">{item.id}</td>
                        <td className="px-6 py-3">{item.firstname}</td>
                        <td className="px-6 py-3">{item.lastname}</td>
                        <th className="px-6 py-3">{item.status}</th>
                    </tr>
                    ))}
                </tbody>
                </table>


            </div>
        
    </Layout>
    )}