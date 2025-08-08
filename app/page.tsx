import CTA from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import { popularSessions, recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {popularSessions.map((session) => (
          <CompanionCard key={session.id} {...session} />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
