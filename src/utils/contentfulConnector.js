

const client = require('contentful').createClient({
    space: '045dz9sj9myv',
    accessToken: '3mBoTvGRBNK6Rw_cyAoHxrxLGXZ0dZnly809bBeOpdA'
})

export async function fetchHeroDetails() {

    const entries = await client.getEntries({
        content_type: 'homepageHero'
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchProjects() {

    const entries = await client.getEntries({
        content_type: 'projects'
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchBlogPosts() {

    const entries = await client.getEntries({
        content_type: 'blogPosts'
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchThemeDetails() {

    const entry = await client.getEntry({
        id: '5mar2WJMsNJ9YhjYl6IY8a'
    })

    if (entry) return entry

}


