import { RouterProvider } from "react-router-dom";
import StoreProvider from "./providers/store-provider";
import { router } from "./providers/router-provider/router";

const App = () => {

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  )
}

export default App;