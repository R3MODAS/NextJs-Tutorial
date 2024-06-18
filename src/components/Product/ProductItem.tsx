import { Product } from "@/lib/models/ProductModel";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }: { product: Product }) => {
  const { name, image, slug, brand, price } = product;

  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${slug}`}>
          <h2 className="card-title font-normal">{name}</h2>
        </Link>
        <p className="mb-2">{brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${price}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
