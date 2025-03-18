export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input 
                type="text" 
                placeholder="Username" 
                className="w-64 px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-64 px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
                Login
            </button>
        </div>
    );
}
