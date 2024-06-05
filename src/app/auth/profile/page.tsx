import { Button, Card, CardBody, Chip, Input } from "@nextui-org/react";
import {
  EditIcon,
  EyeIcon,
  FilePenLineIcon,
  SchoolIcon,
  Trash2Icon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AuthProfilePage() {
  return (
    <section className="container py-12 space-y-6">
      <Card>
        <CardBody className="flex flex-col items-center py-12">
          <Image
            src={"/favicon.ico"}
            width={100}
            height={100}
            className=" rounded"
            alt="user icon"
          />
          <h1 className="flex items-center py-4 text-2xl font-bold space-x-2">
            <span>Username</span>
            <FilePenLineIcon className="cursor-pointer" />
          </h1>
          <section className="flex justify-between items-center space-x-8">
            <section className="flex space-x-2 items-center">
              <User2Icon />
              <span>UI设计</span>
            </section>
            <section className="flex space-x-2 items-center">
              <SchoolIcon />
              <span>DRZY</span>
            </section>
          </section>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="flex w-full flex-row justify-between py-4 px-12 space-x-12">
          <section className="flex flex-1">
            <span className="w-[120px] font-bold">邮箱：</span>
            <span className="font-bold">lufangzhao2000@mindrank.ai</span>
            <Chip size="sm" className="ml-4" color="success">
              已认证
            </Chip>
            <section className="flex ml-auto space-x-2">
              <EditIcon />
              <Trash2Icon />
            </section>
          </section>
          <section className="flex flex-1">
            <span className="w-[120px] font-bold">手机号：</span>
            <span className="font-bold">13879837492</span>
            <Chip size="sm" className="ml-4" color="danger">
              未认证
            </Chip>
            <section className="flex ml-auto space-x-2">
              <EditIcon />
              <span className="text-gray underline">立即认证</span>
            </section>
          </section>
        </CardBody>
      </Card>
      <h1 className="font-bold text-xl">修改密码</h1>
      <Card>
        <CardBody className="p-12">
          <form
            action={`${process.env.NEXT_API_URL}/auth/change_password`}
            className="flex flex-col w-1/3 space-y-8"
            method="post">
            <fieldset className="flex justify-between space-x-3">
              <Input
                type="password"
                placeholder="请输入当前密码"
                name="old_password"
              />
              <Button isIconOnly color="primary">
                <EyeIcon />
              </Button>
            </fieldset>
            <fieldset className="flex justify-between space-x-3">
              <Input
                type="password"
                placeholder="请输入新密码"
                name="new_password"
              />
              <Button isIconOnly color="primary">
                <EyeIcon />
              </Button>
            </fieldset>
            <Link href={"/auth/forget_password"}>忘记密码？</Link>
            <Button color="primary" className="w-full" type="submit">
              提交新密码
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
