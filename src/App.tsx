import "./App.css";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import AppRoutes from "./route/Routes";

function App() {
  return (
    <>
      <AppRoutes />
      <ScrollToTopButton />
    </>
  );
}

export default App;
