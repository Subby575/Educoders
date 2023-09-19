import StuNavbar from "@/app/Components/StuNavbar"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body >
            <StuNavbar/>
            
            {children}
            
            </body>
      </html>
    )
  }