import { Head } from "./Components/Head";
import { Body } from "./Components/Body";
import { Bottom } from "./Components/Bottom";
import { Footer } from "./Components/Footer";
export default function Home() {
  return (  
    <section classname=" overflow-hidden " >
    
      <Head />
      <Body />
      <Bottom />
      <Footer />
    </section>
  );
}
