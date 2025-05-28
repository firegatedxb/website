import Index from "../components/home/Index";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();

  const partnerresponse = await fetch(`${process.env.BASE_URL}/api/admin/partners`, { next: { revalidate: 60 } });
  const partnerdata = await partnerresponse.json();
  return (
    <>
      <Index data={data.data} pdata={partnerdata.data}/>
    </>
  );
}
