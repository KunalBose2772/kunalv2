import HeroAbout from "../components/HeroAbout";
import TrustedBy from "../components/TrustedBy";
import InlineLeadCapture from "../components/InlineLeadCapture";
import Work from "../components/Work";
import DeviceShowcase from "../components/DeviceShowcase";
import Approach from "../components/Approach";
import Capabilities from "../components/Capabilities";
import TechStackUniverse from "../components/TechStackUniverse";
import ClientResults from "../components/ClientResults";
import BehindTheScreen from "../components/BehindTheScreen";
import Playground from "../components/Playground";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative w-full">
      <HeroAbout />
      <TrustedBy />
      <InlineLeadCapture />
      <Work />
      <DeviceShowcase />
      <Approach />
      <Capabilities />
      <TechStackUniverse />
      <ClientResults />
      <BehindTheScreen />
      <Playground />
      <Contact />
      <Footer />
    </main>
  );
}
