import { CartProvider } from "./context"
import { AppRoutes } from "./pages/Routes"

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App
