import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.Page";
import RQsuperHeroPage from "./components/RQsuperHero.page";
import SuperHeroPage from "./components/SuperHero.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simple" element={<SuperHeroPage />} />
        <Route path="/rq" element={<RQsuperHeroPage />} />
      </Routes>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  );
}

export default App;
