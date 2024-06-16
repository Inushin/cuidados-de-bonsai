import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		let spanishReadingTime = `${readingTime.text.split(' ')[0]} min lectura`
		data.astro.frontmatter.minutesRead = spanishReadingTime
	}
}
