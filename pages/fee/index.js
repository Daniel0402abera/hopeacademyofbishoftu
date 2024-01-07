import { CircularProgress } from "@mui/material";
import useGetData from "../api/useGetData";

export default function Fees() {
  let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/our-fees`;
  const { data, isLoading, isError, isFetching } = useGetData(endpoint);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div className="bg-white p-8">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          SCHOOL YEAR 2023/24 TUITION AND FEES SCHEDULE
        </h1>
        <p className="text-center mb-8">
          Hope Academy Ethiopia has established the annual tuition and fees
          schedule for School Year 2023/2024 as follows:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-sm font-semibold uppercase bg-blue-700 text-white">
              <tr>
                <th className="p-4">Level</th>
                <th className="p-4">Age of Start</th>
                <th className="p-4">Application Fee</th>
                <th className="p-4">Registration Fee</th>
                <th className="p-4">Term 1</th>
                <th className="p-4">Term 2</th>
                <th className="p-4">Term 3</th>
                <th className="p-4">Term 4</th>
                <th className="p-4">Per Month</th>
                <th className="p-4">Annual Tuition</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              {data?.data?.map((data, index) => (
                <tr>
                  <td className="p-4">{data.attributes.Level}</td>
                  <td className="p-4">{data.attributes.age_of_start}</td>
                  <td className="p-4">{data.attributes.application_fee} ETB</td>
                  <td className="p-4">
                    {data.attributes.registration_fee} ETB
                  </td>
                  <td className="p-4">{data.attributes.Level} ETB</td>
                  <td className="p-4">{data.attributes.term2} ETB</td>
                  <td className="p-4">{data.attributes.term3} ETB</td>
                  <td className="p-4">{data.attributes.term4} ETB</td>
                  <td className="p-4">{data.attributes.per_month_fee} ETB</td>
                  <td className="p-4">
                    {data.attributes.per_month_fee * 12} ETB
                  </td>
                  <td className="p-4">{data.attributes.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
