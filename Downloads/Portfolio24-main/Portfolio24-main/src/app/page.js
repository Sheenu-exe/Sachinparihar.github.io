import { Header } from "@/component/header";
import Hero from "./hero/page";
import Skills from "./tech stack/page";
import Projects from "./Projects/page";
import Experience from "./Experience/page";
import Footer from "@/component/footer";
import About from "@/app/About/page";

export default function Home() {
  return (
    <div className="flex flex-col" data-theme="light">
       <Header/>
     <Hero/>
     <Experience/>
    <Skills/>
    <Projects/>
    <About/>
    <Footer/>
    </div>
  );
}
