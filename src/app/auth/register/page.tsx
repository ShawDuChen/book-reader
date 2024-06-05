import loginBG from "@/assets/loginbg.png";
import {
  Button,
  Input,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";

export default async function RegisterPage() {
  return (
    <section
      className="gradient-container flex justify-center items-center bg-cover"
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
          {/* <>
            {[{ value: 1, label: "男" }].map((item) => (
              <SelectItem key={item.value}>{item.label}</SelectItem>
            ))}
          </> */}
        </Select>
        <Button className="w-full" color="primary">
          注册
        </Button>
      </form>
    </section>
  );
}
