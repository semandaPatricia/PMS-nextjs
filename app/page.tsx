import Image from "next/image";
import { PatientForm } from "@/components/forms/PatientForm";
export default function Home() {
  return (
    <main className="min-h-screen  p-10">
      <h1 className="flex justify-center items-center lg:text-4xl sm:text-xl font-bold">MEDOC <span>+</span></h1>

    

      <PatientForm /> 
          
    </main>
  );
}
