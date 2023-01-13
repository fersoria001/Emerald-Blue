import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductPage } from "../../services/products_service";

export default function Pagination() {
  const [page, setPage] = useState(1);

  const { isLoading, isError,error ,data : products, isFetching, isPreviousData } = useQuery({
    queryKey:["pages", page],
    queryFn: () => getProductPage,
    keepPreviousData: true
    }
  );


  if(isLoading) return <p>Loading products..</p>
  if(isError) return <p> Error : {error.message}</p>
  const content = products.map(product => <Product key={product.id} product={product} />)
  const lastPage = () => setPage(products.total_pages)
  const firstPage = () => setPage(1)
  const pagesArray = Array(users.total_pages).fill().map((_, index) => index + 1 )
  return nav = (
    <nav className="nav-ex2">
        <button onClick={firstPage} disabled={isPreviousData || page === 1}>&lt;&lt;</button>
        {/* Removed isPreviousData from PageButton to keep button focus color instead */}
        {pagesArray.map(pg => <PageButton key={pg} pg={pg} setPage={setPage} />)}
        <button onClick={lastPage} disabled={isPreviousData || page === users.total_pages}>&gt;&gt;</button>
    </nav>
)
}
