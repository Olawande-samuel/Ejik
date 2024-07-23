/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from "@portabletext/react";

const Body = ({ body }: { body: any[] }) => {
	return (
		<div className="blog_content">
			<PortableText value={body} />
		</div>
	);
};
export default Body;
