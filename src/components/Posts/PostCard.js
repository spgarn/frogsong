import React from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './posts.css'

const PostCard = () => {
    const posts = [
        { tile: 'New game out!', text: 'We just released our new game D-crop! It have been 2 years in the making and we are very proud of the results!', id: 1 },
        { tile: 'Game days!', text: 'Now it is time for our annually game days! 16-20 at our office in Malmö!', id: 2 },
        { tile: 'Sale!', text: 'Our first IP, Spellsworn, is now on 50% sale! Be sure to check it out!', id: 3 },
        { tile: 'New site!', text: 'Our new website is out! New features and much faster loading times. Be sure to check it out!', id: 4 },
    ]
    return (
        posts.map(post => {
            return (
                <div key={post.id} className='post-card'>
                    <H3>{post.tile}</H3>
                    <H4>{post.text}</H4>
                    <i class="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
                </div>
            )
        })

    )
}

export default PostCard