import React from "react";

export default function CategoryPage({ params }: { params: { id: string } }) {
  return <section>{params.id}</section>;
}
