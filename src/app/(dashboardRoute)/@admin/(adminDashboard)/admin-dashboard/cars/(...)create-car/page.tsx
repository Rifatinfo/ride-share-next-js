"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/axios";
import { mutate } from "swr";

export default function CreateCarModal() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const updatedData = {
      ...data,
      rating: parseInt(data.rating as string),
      passengerCapacity: parseInt(data.passengerCapacity as string),
    };
    
    try {
      await api.post("/cars", updatedData);
      setLoading(false);

      mutate("/cars");
      
      router.back();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const brands = [
    { label: "Bmw", value: "Bmw" },
    { label: "Mercedes-Benz", value: "Mercedes-Benz" },
    { label: "Porsche", value: "Porsche" },
    { label: "Lamborghini", value: "Lamborghini" },
    { label: "Audi", value: "Audi" },
    { label: "Tesla", value: "Tesla" },
    { label: "Ford", value: "Ford" },
    { label: "Honda", value: "Honda" },
    { label: "Toyota", value: "Toyota" },
  ];
  const fuelType = [
    { label: "Hybrid", value: "Hybrid" },
    { label: "Octane", value: "Octane" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Electric", value: "Electric" },
    { label: "Diesel", value: "Diesel" },
    { label: "Petrol", value: "Petrol" },
  ];
  const conditions = [
    { label: "New", value: "New" },
    { label: "Used", value: "Used" },
  ];

  
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Car</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Car Name" required />
          <Select name="brand" defaultValue="" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {brands.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name="fuelType" defaultValue="" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fuelType.map((f: { label: string; value: string }) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name="condition" defaultValue="" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {conditions.map((c) => (
                  <SelectItem key={c.label} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input name="model" placeholder="Model" required />
          <Input name="image" placeholder="Image URL" type="url" required />
          <Input name="rating" placeholder="Rating" type="number" required />
          <Input
            name="passengerCapacity"
            placeholder="Passenger Capacity"
            type="number"
            required
          />
          <Input name="color" placeholder="Color" required />

          <DialogFooter className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}