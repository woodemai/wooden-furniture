import { mainLinks } from "@/entities/product/products";
import LinkList from "@/widgets/product/LinkList";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="mx-auto w-full max-w-5xl mt-8">
      <LinkList items={mainLinks} />
      {!mainLinks.length && <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
        <h1 className="text-3xl font-bold tracking-tight">Товары не найдены :(</h1>
        <Link className="text-accent underline-offset-8 hover:underline" to='/'>На главную</Link>

      </div>}
    </div>
  )
}

export default Home;