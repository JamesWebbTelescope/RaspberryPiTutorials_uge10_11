import type {StudentData, TutorialData} from '../types/Types'

export const GetTutorials = async (url: string) => {
    try{
        const res = await fetch(`${url}/api/tutorials`)
        const data = await res.json()
        let tutorials: Array<TutorialData> = []
        for(let i = 0; i < data.length; i++)
        {
            const tutorial: TutorialData = {} as TutorialData
            tutorial.id = data[i]["ID"]
            tutorial.name = data[i]["name"]
            tutorial.link = data[i]["link"]
            tutorials.push(tutorial)
        }
        return Array.isArray(tutorials) ? tutorials: []
    }
    catch(error){
        console.log("Error fetching tutorials:", error);
        return [];
    }    
}

export const GetExternal = async (url: string, tutorial: string) => {
    try{
        console.log('Getting external tutorial')
        console.log(`${url}/api/tutorials/external?url=${tutorial}`)
        const res = await fetch(`${url}/api/tutorials/external?url=${tutorial}`)
        const data = await res.json()
        console.log(data)
        return data ? data: []
    }
    catch(error){
        console.log("Error fetching tutorials:", error);
        return [];
    }    
}


export const GetStudents = async (url: string) => {
    try{
        const res = await fetch(`${url}/api/student`)
        console.log(res)
        const data = await res.json()
        let students: Array<StudentData> = []
        for(let i = 0; i < data.length; i++)
        {
            const student: StudentData = {} as StudentData
            student.id = data[i]["ID"]
            student.firstname = data[i]["firstname"]
            student.lastname = data[i]["lastname"]
            student.status = data[i]["status"]
            students.push(student)
        }
        return Array.isArray(students) ? students: []
    }
    catch(error){
        console.log("Error fetching students:", error);
        return [];
    }    
}