import Index from "@/app/components/Clients/Index";

export default async function Page() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/clients`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <>
      <Index data={data.data}/>
    </>
  );
}