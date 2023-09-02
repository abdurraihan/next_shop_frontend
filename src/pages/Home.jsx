
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/productList/ProductList'


export default function Home() {
  return (
    <div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>
    </div>
  )
}
