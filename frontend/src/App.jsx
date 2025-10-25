import SurplusExchangePage from "./pages/SurplusExchangePage"
import { ProductProvider } from "./store/ProductContext"

function App() {

  return (
    <>
      <ProductProvider>
        <SurplusExchangePage />
      </ProductProvider>
    </>
  )
}

export default App
