export function getSocialsIcon(url) {
    if (url.includes('facebook')) return { icon: 'fab fa-facebook-f', url: url }
    if (url.includes('twitter')) return { icon: 'fab fa-twitter', url: url }
    if (url.includes('artstation')) return { icon: 'fab fa-artstation', url: url }
    if (url.includes('linkedin')) return { icon: 'fab fa-linkedin-in', url: url }
    return { icon: 'fas fa-desktop', url: url }
}