import "./App.css";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import AppRoutes from "./route/Routes";
import { TextSizeProvider } from "./variables/textSizeContext";

function App() {
  return (
    <>
      <TextSizeProvider>
        <AppRoutes />
        <ScrollToTopButton />
      </TextSizeProvider>
    </>
  );
}

export default App;
