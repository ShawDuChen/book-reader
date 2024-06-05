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

  return (
    <div className="sticky top-0 shadow-md">
      <Navbar>
        <NavbarBrand>
          <Image src="/favicon.ico" alt="icon" className="h-12 mr-4" />
          <p className="font-bold text-inherit">
            {process.env.NEXT_WEBSIATE_TITLE}
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => {
            const isActive = url ? item.path.startsWith(url) : false;
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
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
