import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminPage = () => {
    return (
        <div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Cars</h2>
                    <ul className="space-y-2">
                        <li>Car A</li>
                        <li>Car B</li>
                    </ul>
                </div>

                <Link href="/create-car">
                    <Button>Add Car</Button>
                </Link>
            </div>
        </div>
    );
};

export default AdminPage;