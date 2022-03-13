import Header from "app/components/Header"
import ItemCardGrid from "app/components/ItemCardGrid";
import Head from "app/components/Head";
import { json, useLoaderData } from "remix";

export async function loader() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(res)
  return json(await res.json());
  
}



export function headers({ loaderHeaders, parentHeaders }) {
  return {
    "server": "akash",
    "Cache-Control": "max-age=1, stale-while-revalidate=30",
  };
}

export default function Index() {
  const data = useLoaderData();
console.log(data)
  return (
    <>
    <Header />
    <Head props={data}/>
    <ItemCardGrid /> < />
  );
}