"use client";

import useSWR from "swr";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";

export default function CarsPage() {
 const {data , error, isLoading, mutate} = useSWR("/cars");
 console.log(data);
 
  return (
    <div>
      <p>Car Page</p>
    </div>
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold mb-4">Cars List</h1>
    //   <Link
    //     href={`/admin-dashboard/cars/(.)create-car`}
    //     className="text-blue-600 underline"
    //   >
    //     <Button>crete car</Button>
    //   </Link>
    //   <ul className="space-y-3">
    //     {/* {cars?.map((car:any) => (

    //     ))} */}
    //     <li
    //         key={car.id}
    //         className="p-4 bg-white rounded shadow flex justify-between"
    //       >
    //         <div>
    //           <p className="font-semibold">{car.name}</p>
    //           <p className="text-gray-500">Model: {car.model}</p>
    //         </div>

    //         {/* Modal Link */}
    //       </li>
    //   </ul>
    // </div>
  );
}