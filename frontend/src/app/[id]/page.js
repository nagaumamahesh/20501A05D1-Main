import Image from 'next/image';

const getTrain = async (id) => {
  const response = await fetch(`http://localhost:3001/api/trains/${id}`);
  const { result } = await response.json();
  return result;
};

export default async function Page({ params }) {
  const { id } = params;
  const train = await getTrain(id);

  return (
    <main className="p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4">Train Details</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h5 className="text-lg font-semibold mb-2">{train.trainName}</h5>
        <p className="mb-2">Train Number: {train.trainNumber}</p>
        <p className="mb-2">
          Departure Time:{" "}
          {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
        </p>
        <p className="mb-2">
          Seats Available:{" "}
          {`Sleeper: ${train.seatsAvailable.sleeper}, AC: ${train.seatsAvailable.AC}`}
        </p>
        <p className="mb-2">Price: {`Sleeper: ${train.price.sleeper}, AC: ${train.price.AC}`}</p>
        <p className="mb-2">Delayed By: {train.delayedBy} Hours</p>
      </div>
    </main>
  );
}
