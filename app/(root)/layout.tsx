import Navbar from "@/components/Navbar";
import "../globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main className="font-work-sans">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
