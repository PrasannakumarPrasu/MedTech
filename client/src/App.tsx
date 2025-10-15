import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Account from "@/pages/Account";
import Orders from "@/pages/Orders";
import OrderDetail from "@/pages/OrderDetail";
import Cart from "@/pages/Cart";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminInventory from "@/pages/AdminInventory";
import AdminUpdateStock from "@/pages/AdminUpdateStock";
import AdminEditProduct from "@/pages/AdminEditProduct";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/orders" component={Orders} />
      <Route path="/order/:id" component={OrderDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/inventory" component={AdminInventory} />
      <Route path="/admin/update-stock/:id" component={AdminUpdateStock} />
      <Route path="/admin/edit-product/:id" component={AdminEditProduct} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
