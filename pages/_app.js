import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>   
    {/* <ThemeProvider attribute="class"> */}
      <Navbar/>
      <ToastContainer 
      position="bottom-right"
      />
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}

export default MyApp;
