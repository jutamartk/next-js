import { fetchCatFact } from "../lib/api";

interface FactStatus {
  verified: boolean;
  feedback: string;
  sentCount: number;
}
interface Fact {
  _id: string;
  __v: string;
  user: string;
  text: string;
  updatedAt: string;
  sendDate?: string;
  deleted: boolean;
  source: string;
  type: string;
  status: FactStatus;
}

export default async function AboutPage() {
  const data: Fact[] = await fetchCatFact();
  const listItems = data.map((d) => (
    <figure
      className="rounded-xl bg-yellow-500 p-3 m-4 text-blue-500 "
      key={"text_display"}
    >
      {d.text}
      {d.updatedAt}
    </figure>
  ));
  console.log(data);
  return (
    <div className="bg-slate-100  p-8 md:p-0 dark:bg-slate-800">
      <h1 className="text-yellow-500 dark:text-red-400 text-2xl m-4">
        cat fact
      </h1>
      {listItems}
    </div>
  );
}
