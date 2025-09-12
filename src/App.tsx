import { useEffect } from "react";
import "./App.css";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import AppRoutes from "./route/Routes";
import { TextSizeProvider } from "./variables/textSizeContext";
import {  useDispatch } from "react-redux";
import { fetchAllStrapiData } from "./store/slices/strapiSlices";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStrapiData()); // calls all APIs once
  }, [dispatch]);

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
