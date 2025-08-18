import React from 'react'
import Index from '../../components/partners/Index'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/partners`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "FireGate";
  const metadataDescription =
    data?.data?.metaDescription || "FireGate";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function Page() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/partners`, { next: { revalidate: 60 } });
  const data = await response.json();
  const homeResponse = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const homeData = await homeResponse.json();
  return (
    <>
      <Index data={data.data} homedata={homeData.data} />
    </>
  );
}