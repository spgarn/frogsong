

const client = require('contentful').createClient({
    space: process.env.GATSBY_SPACE_ID,
    accessToken: process.env.GATSBY_ACCESS_TOKEN
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


