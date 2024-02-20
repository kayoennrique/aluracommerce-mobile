import { ContextAuthProvider } from "./src/contexts/ContextAuth";
import { ProductsProvider } from "./src/contexts/ContextProducts";
import { ProviderTheme } from "./src/contexts/ContextTheme";
import Routes from "./src/routes";

export default function App() {
  return (
    <ProviderTheme>
      <ContextAuthProvider>
        <ProductsProvider>
          <Routes />
        </ProductsProvider>
      </ContextAuthProvider>
    </ProviderTheme>
  );
}