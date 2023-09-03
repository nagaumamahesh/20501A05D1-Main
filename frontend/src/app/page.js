import Image from 'next/image';

const getTrains = async () => {
  const response = await fetch("http://localhost:3001/api/trains");
  const { result } = await response.json();
  return result;
};

export default async function Home() {
  const trains = await getTrains();

  return (
    <main className="p-10 bg-white">
      <h1 className="text-3xl mb-4">John Doe Railway Enquiry</h1>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border p-2">Train Name</th>
            <th className="border p-2">Train Number</th>
            <th className="border p-2">Departure Time</th>
            <th className="border p-2">Seats Available</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Delayed By</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, index) => (
            <tr key={index}>
              <td className="border p-2">
                <a href={`/${train.trainNumber}`} className="text-blue-500 hover:underline">
                  {train.trainName}
                </a>
              </td>
              <td className="border p-2">{train.trainNumber}</td>
              <td className="border p-2">
                {`${train.departureTime.Hours}:${train.departureTime.Minutes}`}
              </td>
              <td className="border p-2">
                <div className="flex">
                  <div className="mr-4">Sleeper: {train.seatsAvailable.sleeper}</div>
                  <div>AC: {train.seatsAvailable.AC}</div>
                </div>
              </td>
              <td className="border p-2">
                <div className="flex">
                  <div className="mr-4">Sleeper-Cost: {train.price.sleeper}</div>
                  <div>AC-Cost: {train.price.AC}</div>
                </div>
              </td>
              <td className="border p-2">{train.delayedBy} Hours</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
