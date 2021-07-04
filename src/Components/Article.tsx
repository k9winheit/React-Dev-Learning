import React, { useEffect, useState } from "react"

export const Article = () => {

    const [resourceType, setResourceType] = useState<string>('posts');

    // Mounting
    // useEffect(() => {
    //     console.log('Render')
    // }, [])

    // Updating
    useEffect(() => {
        console.log('Render')
    }, [resourceType])

    // Unmounting
    // useEffect(() => {
    //     console.log('Render')

    //     return () => {
    //         console.log('unmounted')
    //     }
    // }, [resourceType])

    return (
        <React.Fragment>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>
                {resourceType}
            </h1>
        </React.Fragment>
    )
}


