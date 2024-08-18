// page.tsx or where you want to import the Maps component
"use client";
import dynamic from "next/dynamic";

const Maps = dynamic(() => import("./_components/Maps"), {
  ssr: false, // Disable server-side rendering
});

const Page = () => {
  return (
    <div>
      <h1>Map Page</h1>
      <Maps />
    </div>
  );
};

export default Page;
