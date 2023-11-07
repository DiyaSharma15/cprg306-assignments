import StudentInfo from "./studentInfo"
import Link from "next/link"


export default function Home() {
  return (
    <main>
      <h1 className= "font-bold text-center text-blue-800">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link className= "text-lg mx-4 text-blue-600" href="/week2">week2</Link><br/>
      </div>
      <Link className= "text-lg mx-4 text-blue-600" href="/week3">week3</Link><br/>
      <Link className= "text-lg mx-4 text-blue-600" href="/week4">week4</Link><br/>
      <Link className= "text-lg mx-4 text-blue-600" href="/week5">week5</Link><br/>
      <Link className= "text-lg mx-4 text-blue-600" href="/week6">week6</Link><br/>
      <Link className= "text-lg mx-4 text-blue-600" href="/week7">week7</Link><br/>
      <Link className= "text-lg mx-4 text-blue-600" href="/week8">week8</Link><br/>


    </main>
  );
}
