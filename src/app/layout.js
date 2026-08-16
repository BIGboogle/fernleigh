import { Gruppo, Google_Sans_Flex } from "next/font/google";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";
import AuthProvider from "./context/AuthContext";

const google = Google_Sans_Flex({ subsets: ["latin"], weight: ["200","1"], variable: "--font-text" });
const gruppo = Gruppo({ subsets: ["latin"], weight: ["400"], variable: "--font-alt" });

export const metadata = {
	title: "fernLeigh",
	description: "The pride of fittings",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={` ${google.variable} ${gruppo.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<AuthProvider>
					<Navbar />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
