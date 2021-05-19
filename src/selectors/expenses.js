
export default (entries, { date }) => {
    return entries.sort((a,b) => {
        return a.date < b.date ? 1 : -1
    })
}