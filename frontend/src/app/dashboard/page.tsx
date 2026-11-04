
import AppLayout from "@/components/layout/AppLayout";

import DashboardHeader from "@/features/dashboard/components/DashboardHeaders";
import StatisticsCards from "@/features/dashboard/components/StatisticsCards";
import CareerProfileCard from "@/features/dashboard/components/CareerProfileCard";
import RecommendedSteps from "@/features/dashboard/components/RecommendedSteps";

export default function DashboardPage() {
  return (
    <AppLayout>
      <DashboardHeader />

      <StatisticsCards />

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <CareerProfileCard />
        <RecommendedSteps />
      </div>
    </AppLayout>
  );
}
