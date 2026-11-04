
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar />

      <div className="ml-64">
        <AppHeader />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
