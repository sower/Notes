import escapeHtml from 'escape-html'
import { getHighlighter } from 'shiki'

export const highlight = async (theme = 'material-palenight') => {
    const highlighter = await getHighlighter({ theme })

    const custom = ['text', 'properties']

    return (str: string, lang: string) => {
        if (!lang || custom.includes(lang.toLowerCase())) {
            return `<pre v-pre><code>${escapeHtml(str)}</code></pre>`
        }

        if (lang.toLowerCase().startsWith('vb')) {
            lang = 'vb'
        } else if (lang.toLowerCase() === 'git') {
            lang = 'cmd'
        } else if (lang.toLowerCase().startsWith('http')) {
            lang = 'ssh-config'
        }

        return highlighter.codeToHtml(str, lang).replace(/^<pre.*?>/, '<pre v-pre>')
    }
}