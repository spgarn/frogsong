export function getSocialsIcon(url) {
    if (url.includes('facebook')) return { icon: 'fab fa-facebook-f', url: url }
    if (url.includes('twitter')) return { icon: 'fab fa-twitter', url: url }
    if (url.includes('artstation')) return { icon: 'fab fa-artstation', url: url }
    if (url.includes('linkedin')) return { icon: 'fab fa-linkedin-in', url: url }
    if (url.includes('steam')) return { icon: 'fab fa-steam', url: url }
    if (url.includes('discord')) return { icon: 'fab fa-discord', url: url }
    if (url.includes('youtube')) return { icon: 'fab fa-youtube', url: url }
    return { icon: 'fas fa-desktop', url: url }
}