import loginBG from "@/assets/loginbg.png";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
export default async function LoginPage() {
  return (
    <section className="gradient-container flex">
      <section
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${loginBG.src})`,
        }}
      />
      <section className="w-1/2 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-2xl font-bold">
          {process.env.NEXT_WEBSIATE_TITLE}
        </h1>
        <form
          action={`${process.env.NEXT_API_URL}/auth/login`}
          method="post"
          className="space-y-4 w-full px-12">
          <Input name="username" placeholder="请输入用户名" />
          <Input name="password" placeholder="请输入密码" />
          <section className="flex items-center space-x-2">
            <Checkbox />
            <p>
              登录则遵守{" "}
              <Link href="/user/agreement" className="text-primary">
                《用户规范》
              </Link>
            </p>
          </section>
          <Button type="submit" color="primary" className="w-full">
            Login
          </Button>
          <section className="flex items-center justify-between">
            <Link href={"/auth/forget-password"} className="text-primary">
              忘记密码？
            </Link>
            <Link href={"/auth/register"} className="text-primary">
              注册
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
}
