export default function Overview() {
    return (
      <div className="bg-white">
        <div className="relative">
          <img
            alt="School overview"
            className="w-full h-[400px] object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1510/400",
              objectFit: "cover",
            }}
            width="1510"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">OUR SCHOOL OVERVIEW</h1>
          </div>
        </div>
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-lg">
                Cambridge Academy Ethiopia is committed to offering rigorous academic standards and focuses on critical
                thinking, creativity, and communication. Cambridge Academy Ethiopia offers a broad and balanced education
                that includes a range of academic subjects as well as extracurricular activities. We are seeking to
                develop well-rounded students who are equipped with the skills and knowledge needed to succeed in a range
                of different fields. We look to offer a unique educational experience that is designed to prepare students
                for success in a rapidly changing global environment. We offer a curriculum that is recognized around the
                world, providing students with a globally respected qualification that is widely accepted by universities
                and employers. This makes it easier for students to pursue further education or career opportunities in
                different countries.
              </p>
              <p className="text-lg mt-4">
                Cambridge Academy Ethiopia places a strong emphasis on independent learning and critical thinking. Our
                students are encouraged to explore their interests and passions and to develop their own ideas and
                perspectives. This helps to foster creativity, innovation, and problem-solving skills, which are highly
                valued in today's rapidly changing job market. Our multi-national students have the opportunity to learn
                from and work with peers from a range of different cultures and backgrounds, helping to develop
                cross-cultural understanding and respect.
              </p>
            </div>
            <div>
              <img
                alt="Students interacting"
                className="w-full h-auto object-cover rounded-md"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="500"
              />
            </div>
          </div>
        </div>
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
  