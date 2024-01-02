import useGetData from "../api/useGetData";

export default function Team() {
  // let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/ourTeams?populate=*`;
  let endpoint2 = "http://localhost:1337/api/our-teams?populate=*";

  const {
    data: team,
    isLoading: loading,
    isError: error,
    isFetching: fetching,
  } = useGetData(endpoint2);

  console.log("team", team?.data);

  return (
    <section aria-labelledby="team-section" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" id="team-section">
          OUR TEAM
        </h2>

        <div className="flex justify-center  gap-8">
          {team?.data?.map((team) => (
            <div className="text-center">
              <img
                alt={team?.attributes?.name}
                className="w-80 h-72 object-cover mb-4 mx-auto"
                height="300"
                src={team?.attributes?.profile?.data?.attributes?.url}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100%"
              />
              <h3 className="text-xl font-semibold">
                {team?.attributes?.name}
              </h3>
              <p className="text-gray-600">{team?.attributes?.title}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
