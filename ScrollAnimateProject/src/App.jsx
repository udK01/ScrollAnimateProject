import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <section className="flex">
      <Sidebar />
      <AboutMe />
    </section>
  );
}
