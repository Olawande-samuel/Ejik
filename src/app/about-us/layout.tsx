import { Outfit } from "next/font/google";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});
const layout = ({ children }: { children: React.ReactNode }) => {
	return <section className={outfit.className}>{children}</section>;
};
export default layout;
