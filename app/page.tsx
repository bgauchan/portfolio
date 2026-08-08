import Sidebar from './components/Sidebar';
import PortfolioGrid from './components/PortfolioGrid';

const Home = () => {
  return (
    <main className="bg-[#F9F7F4] grid xl:grid-cols-[430px_1fr] xl:h-screen xl:overflow-hidden">
      <Sidebar />
      <PortfolioGrid />
    </main>
  );
};

export default Home;
