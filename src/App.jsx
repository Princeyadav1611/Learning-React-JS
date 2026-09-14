import Section1 from "./components/Section1/Section1.jsx";
import Section2 from "./components/Section2/Section2.jsx";

const App = () => {
    const cardsData = [
  {
    id: 1,
    number: 1,
    tag: "Satisfied",
    desc: "Seamless digital onboarding experience tailored for young professionals and freelancers.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
  },
  {
    id: 2,
    number: 2,
    tag: "Growth",
    desc: "Automated wealth accumulation tools with transparent real-time portfolio metrics.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 3,
    number: 3,
    tag: "Secure",
    desc: "Multi-layered enterprise fraud prevention ensuring institutional-grade account safety.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 4,
    number: 4,
    tag: "Instant",
    desc: "Zero-fee cross-border transactions powered by next-generation rails.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 5,
    number: 5,
    tag: "Flexible",
    desc: "Contextual credit scoring built specifically around modern gig economy income flows.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 6,
    number: 6,
    tag: "Automated",
    desc: "Dynamic tax reserve allocation keeping small businesses compliant effortlessly.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 7,
    number: 7,
    tag: "Corporate",
    desc: "Centralized multi-currency treasury management for global remote-first teams.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 8,
    number: 8,
    tag: "Priority",
    desc: "Direct access to private wealth specialists round-the-clock via dedicated channels.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 9,
    number: 9,
    tag: "Insights",
    desc: "Predictive cash flow models highlighting spending anomalies before they happen.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 10,
    number: 10,
    tag: "Ecosystem",
    desc: "Native integrations connecting payroll, invoicing, and core banking under one roof.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop"
  }
];
    return(
        <>
        <Section1 cards={cardsData}/>
        <Section2 />
        </>
    )
}
export default App;
