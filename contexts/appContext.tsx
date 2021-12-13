import { createContext, useState } from "react"

export const AppContext = createContext(null)

const AppProvider = AppContext.Provider
const AppConsumer = AppContext.Consumer

// * Class component way
// import React, { Component } from "react"

// class AppContextProvider extends Component {
//   state = {
//     isPreloading: true,
//   }
//   render() {
//     return (
//       <AppProvider value={{ ...this.state }}>{this.props.children}</AppProvider>
//     )
//   }
// }

// export default AppContextProvider

// * Functional component way
const AppContextProvider = ({ children }) => {
  const [isPreloading, setIsPreloading] = useState(true)
  return (
    <AppProvider value={{ isPreloading, setIsPreloading }}>
      {children}
    </AppProvider>
  )
}

export default AppContextProvider
