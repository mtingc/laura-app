import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { DashboardLayout, AuthLayout } from "@/components/Layouts";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return session ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <AuthLayout />
  );
};

export default MainLayout;
