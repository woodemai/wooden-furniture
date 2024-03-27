import { mainLinks } from "@/entities/product/products";
import LinkList from "@/widgets/product/LinkList";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <LinkList items={mainLinks} />
      {!mainLinks.length && <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
        <h1 className="text-3xl font-bold tracking-tight">Товары не найдены :(</h1>
        <Link className="text-accent underline-offset-8 hover:underline" to='/'>На главную</Link>

      </div>}
    </>
  )
}

export default Home;