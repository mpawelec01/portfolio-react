import { VStack } from "@chakra-ui/react";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { HardSkills } from "./components/HardSkills";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <VStack>
        <Header></Header>
        <Introduction></Introduction>
        <Technologies></Technologies>
        <HardSkills></HardSkills>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <Footer></Footer>
      </VStack>
    </BrowserRouter>
  );
}

export default App;
