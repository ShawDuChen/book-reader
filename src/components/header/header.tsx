import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { headers } from "next/headers";

export default function Header() {
  const headersList = headers();
  const url = headersList.get("x-next-url");

  const navItems: Array<{
    path: string;
    label: string;
  }> = [
    { path: "/category", label: "Category" },
    { path: "/book", label: "Book" },
    {
      path: "/author",
      label: "Author",
    },
  ];

  console.log("url:::::::::::", url);

  return (
    <div className="sticky top-0 shadow-md">
      <Navbar>
        <NavbarBrand>
          <Image src="/favicon.ico" alt="icon" className="h-12 mr-4" />
          <Link
            color={url === "/" ? "primary" : "foreground"}
            href="/"
            className="font-bold cursor-pointer">
            {process.env.NEXT_WEBSIATE_TITLE}
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-12" justify="center">
          {navItems.map((item) => {
            const isActive = url ? url.includes(item.path) : false;
            return (
              <NavbarItem key={item.path} isActive={isActive}>
                <Link
                  color={isActive ? "primary" : "foreground"}
                  href={item.path}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/auth/register"
              variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
