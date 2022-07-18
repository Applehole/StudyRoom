import Head from "next/head"

interface Title {
    title : string
}

const Seo = ({title}: Title) => {
  return (
      <Head>
        <title>{title} | Chatting App</title>
      </Head>
  )
}

export default Seo;
