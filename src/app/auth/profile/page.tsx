import { Card, CardBody } from "@nextui-org/react";
import { FilePenLineIcon } from "lucide-react";
import Image from "next/image";

export default async function AuthProfilePage() {
  return (
    <div className="container py-12">
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
          <div className="flex justify-between items-center"></div>
        </CardBody>
      </Card>
    </div>
  );
}
