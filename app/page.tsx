// app/page.tsx
import Home from "./pages/Home";
import LoginPage from "./pages/login";

let page = "Home";

export default function HomePage() {
  switch(page) {
    case "Home":
      return (
        <div>
          <Home />
        </div>
      );
    case "Login":
      return (
        <div>
          <LoginPage />
        </div>
      );
    default:
      // code block
  } 
}
