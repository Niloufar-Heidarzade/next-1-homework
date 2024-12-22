import data from "../../../data/products.json";
import { notFound } from "next/navigation";

function page({params}) {
  const product = data.find((item) => item.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return(
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export default page;