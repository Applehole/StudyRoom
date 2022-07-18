import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from "../components/Layout"

const App = ({Component, pageProps} : AppProps) => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  
  export default App
  