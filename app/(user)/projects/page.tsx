
import Index from "@/app/components/project/Index";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project/meta`, { next: { revalidate: 60 } });
  const data = await response.json();
  console.log(data)
  const metadataTitle = data?.data?.metaTitle || "Firegate";
  const metadataDescription =
    data?.data?.metaDescription || "Firegate";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function Page() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <>
      <Index data={data} />
    </>
   );
}
