exports.onRenderBody = ({ setHtmlAttributes }, userOptions) => {
	const options = { ...userOptions }
	delete options.plugins
	setHtmlAttributes(options)
}