/* eslint-disable @typescript-eslint/no-explicit-any */

const Header = ({user} : any) => {
    return (
        <header className="flex items-center justify-between bg-white p-4 border rounded-lg shadow-sm">
            <h1 className="text-lg font-semibold text-gray-800">
               Welcome {user.email}
            </h1>
            <button className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Logout
            </button>
        </header>
    );
};

export default Header;