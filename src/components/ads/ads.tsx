import { fetchAds } from "@/api/ads";
import Image from "next/image";
import Link from "next/link";

export default async function AdsBanner() {
  const ads_list = await fetchAds();
  return (
    <section className="fixed right-0 top-1/2 -translate-y-1/2 p-3 rounded-md border bg-white space-y-2">
      {ads_list.map((item) => (
        <section key={item.id}>
          <Link
            href={item.link}
            target="_blank"
            className="text-primary flex flex-col items-center"
            title={item.description || item.title}>
            {item.image && (
              <Image
                src={item.image}
                alt="adv-image"
                width={100}
                height={36}
                objectFit="cover"
              />
            )}
            {item.title}
          </Link>
        </section>
      ))}
    </section>
  );
}
