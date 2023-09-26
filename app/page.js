import StudentInfo from "./studentInfo";
import Link from "next/link";


export default function Home() {
  return (
  <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <Link href="/app/week2">week2</Link>
  </main>
  )
}
