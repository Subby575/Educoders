import Dash from "@/app/Components/Dash"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body >
          <Dash/>
            
            {children}
            
            </body>
      </html>
    )
  }