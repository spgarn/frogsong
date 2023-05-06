import { removeMinutes } from './removeMinutes'


const client = require('contentful').createClient({
    space: process.env.GATSBY_SPACE_ID,
    accessToken: process.env.GATSBY_ACCESS_TOKEN
})

export async function fetchHeroDetails() {

    const entries = await client.getEntries({
        content_type: 'homepageHero',
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchProjectsLandingPage(limit) {

    const entries = await client.getEntries({
        content_type: 'projects',
        limit: limit || 200,

    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchBlogPostsLandingPage() {
    const futureDate = removeMinutes(new Date(), 10)

    const entries = await client.getEntries({
        content_type: 'blogPosts',
        limit: 4,
        order: '-sys.createdAt',
        'sys.createdAt[lt]': futureDate,
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchBlogPosts() {

    const entries = await client.getEntries({
        content_type: 'blogPosts',
        order: '-sys.createdAt',
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}


export async function fetchThemeDetails() {

    const entry = await client.getEntry("5mar2WJMsNJ9YhjYl6IY8a")


    if (entry) return entry

}

export async function fetchTeamMembers() {

    const entries = await client.getEntries({
        content_type: 'team',
    })


    if (entries.items) {
        return {
            items: entries.items
        }
    }

}

export async function fetchJobOpenings() {

    const entries = await client.getEntries({
        content_type: 'jobOpenings',
    })


    if (entries.items) {
        return {
            items: entries.items
        }
    }

}



