import Document, { Html, Head, Main, FlareactScript } from 'flareact/document';

class MyDocument extends Document {
	static async getEdgeProps(ctx) {
		const props = await Document.getEdgeProps(ctx);
		return { ...props };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<FlareactScript />
					{/* <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
						integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
						crossOrigin='anonymous'/> */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
