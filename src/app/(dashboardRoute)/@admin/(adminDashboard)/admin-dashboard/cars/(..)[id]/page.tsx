import { useRouter } from "next/navigation";

export default function CarDetailsModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const id = params.id;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 w-96 shadow-lg relative">
        <button
          onClick={() => router.back()}
          className="absolute right-3 top-3 text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Car Details (Modal)</h2>
        <p>Car ID: {id}</p>
      </div>
    </div>
  );
}