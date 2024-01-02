export default function Curriculum() {
    return (
      <div className="bg-white">
        <header className="bg-[url('/placeholder.svg?height=300&width=1563')] bg-cover bg-center h-[300px]" />
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold my-6">OUR CURRICULUM</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Cambridge Academy Ethiopia follows the National Curriculum for England. The National Curriculum for
                England is a framework that sets out the knowledge, skills, and understanding that children and young
                people should acquire at each stage of their education. It was introduced in 1988 as part of the Education
                Reform Act and has been revised several times since then. The curriculum is divided into four key stages:
                Early Years Foundation Stage (EYFS), Key Stage 1 (KS1), Key Stage 2 (KS2), and Key Stage 3 (KS3). EYFS
                covers children from birth to five years old, while KS1 and KS2 cover children aged five to eleven. KS3
                covers children aged eleven to fourteen and is followed by Key Stage 4 (KS4), which covers children aged
                fourteen to sixteen.
              </p>
              <p>
                The National Curriculum sets out the subjects that should be taught at each stage, and the knowledge,
                skills, and understanding that children should acquire in each subject. The core subjects are English,
                mathematics, and science, and these are taught throughout all stages of the curriculum. Other subjects,
                such as history, geography, art, music, physical education, and modern foreign languages, are also
                included in the curriculum, but their importance and the amount of time spent on each subject varies
                depending on the stage. Each subject has its own program of study, which sets out the key knowledge and
                skills that children should learn in that subject. Assessment is a key part of the curriculum, and it is
                used to measure children's progress and to inform teaching and learning.
              </p>
            </div>
            <div>
              <img
                alt="Students engaging in outdoor activity"
                className="mb-4"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "750/300",
                  objectFit: "cover",
                }}
                width="750"
              />
              <img
                alt="Students working on a project"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "750/300",
                  objectFit: "cover",
                }}
                width="750"
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  