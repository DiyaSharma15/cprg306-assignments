import StudentInfo from "./studentInfo";
import Link from "next/link";


export default function Home() {
  return (
  <main>
    <h1 className= "font-bold text-center text-blue-800">CPRG 306: Web Development 2 - Assignments</h1>
    <Link className= "text-lg mx-4 text-blue-600" href="/app/week2">week2</Link><br/>
    <Link className= "text-lg mx-4 text-blue-600" href="/app/week3">week3</Link>
  </main>
  );
}
