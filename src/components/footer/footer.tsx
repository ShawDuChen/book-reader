import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCallIcon, MailCheckIcon, MessageCircleIcon } from "lucide-react";

export default function Footer() {
  return (
    <section className="fixed w-full bottom-0 bg-secondary p-12">
      <section className="max-w-[1280px] mx-auto">
        <section className="lg:flex space-y-8 justify-between px-4 lg:space-x-12">
          <section className="flex flex-col space-y-2 max-w-[360px]">
            <Link href={"#"}>
              <Image
                src="/favicon.ico"
                alt="logo image"
                width={50}
                height={50}
              />
            </Link>
            <h2 className="text-lg">关于我们</h2>
            <p>
              通过不断的创新以推进AI制药技术的边界，让更多疾病有药可医，让更多生命重获健康。
            </p>
            <h2 className="text-lg">联系我们</h2>
            <p className="flex space-x-4">
              <PhoneCallIcon size={16} className="text-gray-500" />
              <span>+86 13888888888</span>
            </p>
            <p className="flex space-x-4">
              <MailCheckIcon size={16} className="text-gray-500" />
              <span>+86 13888888888</span>
            </p>
          </section>
          <section className="flex flex-row flex-1 justify-between items-start">
            <section className="space-y-2">
              <h3 className="font-bold text-gray-900">核心技术</h3>
              <p>AI新药研发平台</p>
              <p>公司荣誉</p>
              <p>原研创新技术</p>
              <p>技术合作方</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-bold text-gray-900">核心技术</h3>
              <p>AI新药研发平台</p>
              <p>公司荣誉</p>
              <p>原研创新技术</p>
              <p>技术合作方</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-bold text-gray-900">核心技术</h3>
              <p>AI新药研发平台</p>
              <p>公司荣誉</p>
              <p>原研创新技术</p>
              <p>技术合作方</p>
            </section>
          </section>
          <section className="flex flex-col space-y-4">
            <h2 className="font-bold">订阅药品最新资讯</h2>
            <Button type="button" variant="flat" color="primary">
              <MessageCircleIcon />
              <span>微信公众号 了解药品咨询</span>
            </Button>
            <Button type="button" variant="solid" color="primary">
              订阅数据库
            </Button>
          </section>
        </section>
        <Divider className="my-8" />
        <p className="text-center text-sm">&copy; copyright</p>
      </section>
    </section>
  );
}
