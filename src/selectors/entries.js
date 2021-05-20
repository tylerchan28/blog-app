export default (entries, { text }) => {
    return entries.filter((entry) => {
        const textMatch = entry.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    })
}