import Sidebar from "./components/Sidebar";
import PortfolioGrid from "./components/PortfolioGrid";

const Home = () => {
  const bgColors = {
    white: '#FFF',
    beige: '#F9F7F4'
  };

  return (
    <main className={`bg-[${bgColors.beige}] grid xl:grid-cols-[430px_1fr] xl:h-screen xl:overflow-hidden`}>
      <Sidebar />
      <PortfolioGrid />
    </main>
  )
}

export default Home;