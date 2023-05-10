var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export const dateFormatter = (inpute) => {
    const date = new Date(inpute)
    return date.toLocaleDateString('en-us', options)
}