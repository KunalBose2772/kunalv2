import type { Metadata } from "next";
import LoginPage from "@/components/crm/shared/LoginPage";

export const metadata: Metadata = { title: "Admin Login — Built by Kunal CRM" };

export default function AdminLoginPage() {
  return (
    <LoginPage
      role="admin"
      title="Admin Portal"
      subtitle="Sign in to manage leads, quotations & team"
      defaultEmail="admin@builtbykunal.online"
      accentColor="#5b5bd6"
      icon="shield"
    />
  );
}
