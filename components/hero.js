import Image from "next/image";
import Container from "./container";
import ServiceCard from "./servicecard";
import SectionTitle from "./sectionTitle";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div>
            
          </div>
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
               WELCOME TO <span style={{color: '#00008b'}}>HOPE </span> ACADEMY
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Within our educational community, we prioritize nurturing hopeful hearts, instilling resilience and positivity, alongside empowering young minds to envision and strive for brighter, more promising futures.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                style={{background: '#00008b'}}
                href="/registration"
                // target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white  rounded-md ">
                Make an Application
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src='/img/family.svg'
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container >
        <div style={{background: 'white'}} className="flex flex-col p-12 ">
        <SectionTitle
        pretitle="Our Services"
        title="We Provide Comprehensive Early Childhood Education">
          Comprehensive early childhood education, emphasizing holistic development through a nurturing environment, tailored curriculum, character building, and parental engagement, fostering hopeful minds and preparing young learners for brighter futures
      </SectionTitle>
          <div className="flex flex-row justify-center">
            
          {/* <div className="mb-12">
          <h1 style={{color: 'red', fontSize: '20px', padding: '8px 0',fontSize: '24px'}}>Our Services</h1>
          <p className="text-4xl font-bold leading-snug tracking-tight text-gray-800  lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">We Provide Comprehensive Early Childhood Education</p>
         </div> */}
         {/* <div style={{width: '50%', padding: '10px 30px'}} >
         <p className="text-gray-500">Comprehensive early childhood education, emphasizing holistic development through a nurturing environment, tailored curriculum, character building, and parental engagement, fostering hopeful minds and preparing young learners for brighter futures</p>
         <div className="flex flex-row justify-around" >
          <div>
          <p><span style={{color: 'red', fontSize: '24px', padding: '0 10px'}}>&#x2192;</span>Holistic Learning.</p>
         <p><span style={{color: 'red', fontSize: '24px', padding: '0 10px'}}>&#x2192;</span>Child-Friendly Infrastructure.</p>
          </div>
          <div>
         <p><span style={{color: 'red', fontSize: '24px', padding: '0 10px'}}>&#x2192;</span>Safety and Security.</p>
         <p><span style={{color: 'red', fontSize: '24px', padding: '0 10px'}}>&#x2192;</span>Confidence Building.</p>
          </div>
         </div>
         </div> */}
      
          </div>
        <div className="flex flex-wrap mt-2 flex-row">
        <ServiceCard defaultIcon="/img/empower.png" hoverIcon="/img/empower-white.png" defaultTitle={"Empower"} defaultDetail={"Empowering students is a crucial aspect of education. When students feel empowered,"}/>  
        <ServiceCard defaultIcon="/img/engage.png" hoverIcon="/img/engage-white.png" defaultTitle={"Engage"} defaultDetail={"Engaging students in the learning process is a crucial element in ensuring their success."}/>  
        <ServiceCard defaultIcon="/img/graduation.png" hoverIcon="/img/graduation-white.png" defaultTitle={"Graduation"} defaultDetail={"Graduation students are those who have completed the requirements for their degree or diploma in a particular field of study."}/>  
        <ServiceCard defaultIcon="/img/awards.png" hoverIcon="/img/awards-white.png" defaultTitle={"Awarding"} defaultDetail={"Giving students rewards for their efforts suggests that their hard work is appreciated."}/>  
        </div>  
        </div>
      </Container>
    </>
  );
}


export default Hero;