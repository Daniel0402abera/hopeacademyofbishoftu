export default function WhatMakesUsDiffirent() {
    return (
      <div className="bg-white">
        <div className="relative bg-[#f8f9fa]">
          <img
            alt="School banner"
            className="w-full h-[400px] object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1526/400",
              objectFit: "cover",
            }}
            width="1526"
          />
          
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              WHAT MAKES US DIFFERENT?
            </h2>
            <div className="mt-4">
              <div className="inline-block h-1 w-24 bg-[darkBlue]" />
            </div>
          </div>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-7 text-gray-500">
                At our school, we are proud to stand out from the crowd. We believe that what sets us apart is our
                unwavering commitment to integrity, leadership, success, and learning – four key pillars that underpin
                everything we do. Integrity is at the heart of our school culture. We believe in doing the right thing,
                even when no one is watching. We foster a culture of honesty, transparency, and accountability, and hold
                ourselves to the highest ethical standards. By living our values and leading by example, we instill in our
                students a strong sense of integrity that will serve them well in all areas of their lives.
              </p>
              <p className="mt-6 text-lg leading-7 text-gray-500">
                Leadership is another key element of our school’s DNA. We believe that every student has the potential to
                be a leader, and we are committed to helping them develop the skills, knowledge, and confidence they need
                to succeed as leaders in their own right. Through our leadership programs, extracurricular activities, and
                community service projects, we provide our students with opportunities to develop their leadership skills
                and make a positive impact in the world. Success is a cornerstone of our school’s mission. We believe that
                success is not just about academic achievement, but also about developing the skills, knowledge, and
                character traits that will enable our students to thrive in all areas of their lives. Whether our students
                go on to university, start their own businesses, or pursue other paths, we are committed to helping them
                achieve their goals and realize their full potential.
              </p>
              <p className="mt-6 text-lg leading-7 text-gray-500">
                Learning is a lifelong journey, and we are passionate about creating a culture of continuous learning at
                our school. We believe that learning is not just about acquiring knowledge, but also about developing
                critical thinking skills, creativity, and a love of lifelong learning. Through our rigorous academic
                programs, experiential learning opportunities, and a commitment to innovation and excellence, we prepare
                our students for success in a rapidly changing world. In summary, what makes our school different is our
                unwavering commitment to integrity, leadership, and lifelong learning. Together, we make progress, day by
                day, step by step.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                alt="Student focused"
                className="w-full h-[300px] object-cover"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="500"
              />
              <img
                alt="Students collaborating"
                className="w-full h-[300px] object-cover"
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
  