interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Aitor Sobera Ortiz de Zárate', // Site author
	title: 'Cuidados de Bonsai', // Site title.
	description:
		'Un pequeño rincón en internet que, a modo de bitácora, servirá para persistir en el tiempo los cuidados y trabajos que realizo a mis bonsais.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Compartir esta publicación', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
