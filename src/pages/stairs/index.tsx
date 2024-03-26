import { stairs } from "@/entities/product/products";
import ProductList from "@/widgets/product/ProductList";
import { Link } from "react-router-dom";
const Stairs = () => {
  return (
    <div className="mx-auto w-full max-w-5xl mt-8">
      <ProductList items={stairs} />
      {!stairs.length && <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
        <h1 className="text-3xl font-bold tracking-tight">Товары не найдены :(</h1>
        <Link className="text-accent underline-offset-8 hover:underline" to='/'>На главную</Link>

      </div>}
    </div>
  )
}

export default Stairs;