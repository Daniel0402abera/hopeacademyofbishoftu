
import { StyledButton } from "../../components/button";


export default function AcademicCalendar() {

  return (
    <div className="bg-[url('/placeholder.svg?height=550&width=1919')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center h-[90vh] bg-gradient-to-b from-[#667eea] to-[#764ba2]">
        <h1 className="text-5xl font-bold text-white">ACADEMIC CALENDAR</h1>
        <p className="mt-2 text-2xl text-white">2023 - 2024</p>
        <StyledButton className="mt-8 bg-[#ff9900] text-white">Download as PDF</StyledButton>
      </div>
    </div>
  )
}