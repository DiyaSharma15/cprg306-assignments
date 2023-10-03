import StudentInfo from "./studentInfo";
import Link from "next/link";

export default function heading(){
    return(
        <div>
            <h1 >My Shopping List</h1>
            <StudentInfo />
        </div>
    )
}