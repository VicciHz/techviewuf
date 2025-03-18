import Link from "next/link";

export default function LoginButton() {
    return (
        <Link href="./pages/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Go to Login
            </button>
        </Link>
    );
}
