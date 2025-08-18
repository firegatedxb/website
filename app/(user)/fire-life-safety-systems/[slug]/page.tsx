import Index from "@/app/components/system-details/Index";
import { Metadata } from "next";


export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const slug = (await params).slug;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/systems?slug=${slug}`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "Firegate";
  const metadataDescription =
    data?.data?.metaDescription || "Firegate";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function Home({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/systems?slug=${slug}`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <>
    <Index data={data.data}/>
    </>
  );
}