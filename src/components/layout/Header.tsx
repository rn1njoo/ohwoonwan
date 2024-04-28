"use client"

import { useRouter } from "next/navigation";

// hook
import useRouteTitle from "@/hooks/useRouteTitle";  
// icon
import BackArrowIcon from "@/components/commons/BackArrowIcon";

const Header = () => {
  const router = useRouter();
  const headerText = useRouteTitle();

  return (
    <header className="flex items-center justify-start p-4 bg-white shadow">
      <button onClick={() => router.back()} className="mr-4 text-lg text-blue-500">
        <BackArrowIcon />
      </button>
      <h1 className="text-xl font-bold">{headerText}</h1>
    </header>
  );
};

export default Header;
