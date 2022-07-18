import NaviBar from "../components/NaviBar"

const Layout = ({children}: React.PropsWithChildren) => {
    return (
      <div>
        <NaviBar />
        <div>{children}</div>
      </div>
    )
  }
  
  export default Layout
  