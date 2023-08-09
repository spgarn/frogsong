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

export async function fetchPortfolio(limit,isOwnIp) {

    const entries = await client.getEntries({
        content_type: 'projects',
        limit: limit || 200,
        'fields.isOwnIp':isOwnIp || false
    })

    if (entries.items) {
        return {
            items: entries.items
        }
    }
}

export async function fetchBlogPostsLandingPage(limit) {
    const futureDate = removeMinutes(new Date(), 10)

    const entries = await client.getEntries({
        content_type: 'blogPosts',
        limit: limit || 20,
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

export async function fetchHistory() {

    const entry = await client.getEntry("60YMiPOW4k5ssHOkAYbKZB")

    if (entry) return entry

}

export async function fetchLifeAt() {

    const entry = await client.getEntry("20eFCdjDL1fcy8fU0k8Ayl")

    if (entry) return entry

}

export async function fetchContactUs() {

    const entry = await client.getEntry("2qK5kaVjHpcjfo2pxeHUhV")

    if (entry) return entry

}
export async function fetchFooter() {

    const entry = await client.getEntry("3nVyz0bS9OQaSeyMAOASXR")

    if (entry) return entry

}

export async function fetchTeamContentPage() {

    const entry = await client.getEntry("15ZTKEZijAt00UarEvVIDj")

    if (entry) return entry

}

export async function fetchApplicationFormContentPage() {

    const entry = await client.getEntry("1jzmN0KhPcsdi047aIhg7y")

    if (entry) return entry

}

export async function fetchJobContentPage() {

    const entry = await client.getEntry("256eThunKLxF32v6tWGRAX")

    if (entry) return entry

}





