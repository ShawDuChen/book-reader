"use client";
import loginBG from "@/assets/loginbg.png";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

export default function RegisterPage() {
  const items = [{ value: 1, label: "男" }];
  return (
    <section
      className="gradient-container flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${loginBG.src})`,
      }}>
      <form
        action={`${process.env.NEXT_API_URL}/auth/register`}
        method="post"
        className="w-1/2 lg:w-1/4 flex flex-col items-center justify-center bg-white rounded-md px-12 py-4 space-y-8">
        <h1 className="text-xl font-bold text-secondary-foreground">
          注册用户
        </h1>
        <Input placeholder="请输入用户名" />
        <Input placeholder="请输入密码" />
        <Input placeholder="请输入昵称" />
        <Input placeholder="请输入联系方式" />
        <Input placeholder="请输入地址" />
        <Select label="请选择性别">
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Button className="w-full" color="primary">
          注册
        </Button>
      </form>
    </section>
  );
}
