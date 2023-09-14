import React, { useEffect } from 'react'

function useCustomhooks(count) {
    return (
        useEffect(() => {
            document.title = `Count ${count}`
        }, [count])
    )
}

export default useCustomhooks