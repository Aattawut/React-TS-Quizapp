import React from 'react'
import { tsPropertySignature } from '@babel/types'

interface IExample {
    text?: string
    // width?: string
    // height?: string
    // margin?: string
}

export const Example: React.FC<IExample> = props => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

Example.defaultProps = {
    text: 'Default'
}
