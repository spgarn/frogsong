import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import './richTextStyleElement.css'

const RichTextStyleElement = ({ children, isBorder = false }) => {

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return (<img style={{ width: '50%', height: 'auto', borderRadius: '12px' }} src={`${node.data.target.fields.file.url}?w=600&h=600&fit=fill&f=center`} alt={node.data.target.fields.file.fileName}
                />)
            }
        }
    }

    return (
        <div className={isBorder ? 'render-rich-text' : 'render-rich-text-no-border'}>{documentToReactComponents(children, options)}</div>
    )
}

export default RichTextStyleElement