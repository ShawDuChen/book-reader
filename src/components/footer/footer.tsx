import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCallIcon,
  MailCheckIcon,
  MessageCircleIcon,
  ChevronUpSquare,
} from "lucide-react";
import { fetchFooterInfo } from "@/libs/fetch-server";

export default async function Footer() {
  const footerInfo = await fetchFooterInfo();
  return (
    <section className="fixed w-full bottom-0 bg-secondary p-12">
      <section className="container relative">
        <section className="lg:flex space-y-8 justify-between px-4 lg:space-x-12">
          <section className="flex flex-col space-y-2 max-w-[320px]">
            <Link href={"#"}>
              <Image
                src="/favicon.ico"
                alt="logo image"
                width={50}
                height={50}
              />
            </Link>
            <h2 className="text-lg">{footerInfo.about?.title}</h2>
            <p>{footerInfo.about?.description}</p>
            <h2 className="text-lg">联系我们</h2>
            {footerInfo.contacts.map((item, index) => (
              <p key={item.id} className="flex space-x-4">
                {index % 2 === 0 ? (
                  <PhoneCallIcon size={16} className="text-gray-500" />
                ) : (
                  <MailCheckIcon size={16} className="text-gray-500" />
                )}
                <span>{item.title}</span>
              </p>
            ))}
          </section>
          <section className="block sm:flex flex-row flex-1 justify-between items-start">
            {footerInfo.news.map((item) => (
              <section key={item.type} className="space-y-2 mb-2 sm:mb-0">
                {item.list?.map((item, index) =>
                  index === 0 ? (
                    <h3 key={item.id} className="font-bold text-gray-900">
                      {item.title}
                    </h3>
                  ) : (
                    <p key={item.id}>
                      <Link href={item.link!} target="_blank">
                        {item.title}
                      </Link>
                    </p>
                  ),
                )}
              </section>
            ))}
          </section>
          <section className="flex flex-col space-y-4">
            <h2 className="font-bold">订阅药品最新资讯</h2>
            {footerInfo.socials?.map((item, index) => (
              <Button
                key={item.id}
                type="button"
                variant={index % 2 === 0 ? "flat" : "solid"}
                color="primary">
                {index === 0 && <MessageCircleIcon />}
                <Link href={item.link!} target="_blank">
                  {item.title}
                </Link>
              </Button>
            ))}
          </section>
        </section>
        <Divider className="my-8" />
        <p className="text-center text-sm">&copy; copyright</p>

        <Button
          isIconOnly
          color="primary"
          type="button"
          className=" absolute right-0 lg:bottom-20 bottom-0">
          <ChevronUpSquare />
        </Button>
      </section>
    </section>
  );
}
