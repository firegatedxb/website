
import Index from "@/app/components/project/Index";
export default async function Page() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <>
      <Index data={data} />
    </>
   );
}
