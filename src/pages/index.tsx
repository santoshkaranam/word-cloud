import Image from "next/image";
import { Inter } from "next/font/google";
import { WordCloudChart } from "@/components/wordCloudChart";

const inter = Inter({ subsets: ["latin"] });

const newLocal = [
  { text: "C# corner", value: 10 },
  { text: "Articles", value: 4 },
  { text: "Profile", value: 3 },
  { text: "Docs", value: 1 },
  { text: "Mahesh Chand", value: 7 },
  { text: "Answers", value: 2 },
  { text: "Tech", value: 6 },
  { text: "Tutorials", value: 3 },
  { text: "AWS", value: 2 },
  { text: "Azure", value: 2 },
  { text: "Santosh", value:5 },
  { text: "Books", value: 4 },
  { text: "Events", value: 9 },
  { text: "MVP", value: 8 },
  { text: "Unit Test", value: 5 },
  { text: "Introduction", value: 1 },
  { text: "Featured", value: 1 },
  { text: "Success", value: 5 },
  { text: "Microsoft", value: 5 },
  { text: "Live", value: 8 },
  { text: "REST", value: 1 },
  { text: "Profile", value: 4 },
  { text: "Reputation", value: 4 },
  { text: "Gold Member", value: 4 },
  { text: "Web", value: 5 },
  { text: "Block Chain", value: 5 },
  { text: "AI", value: 9 },
];
export default function Home() {
  return (
    <div className="  block border m-10 border-indigo-500">
      <WordCloudChart data={newLocal}></WordCloudChart>
    </div>
  );
}
