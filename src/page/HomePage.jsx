import Hero from "../component/hero";
import TeamStanding from "../component/TeamStanding";
import StatsSection from "../component/StatsSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-fixed">
      <div className="min-h-scree bg-black/40">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>

          <div className="bg-opacity-90">
            <TeamStanding />
          </div>

          <div className="bg-opacity-90">
            <StatsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
