import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-screen w-screen grid place-content-center">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
