import Navigate from "../Components/Navigate"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body >
            <Navigate/>
            {children}
            </body>
      </html>
    )
  }