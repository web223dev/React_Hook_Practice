import React, { useEffect } from 'react'

const Hello = () => {
    useEffect(()=> {
        console.log('render');
        return () =>{
            console.log('unmount')
        }
      })
    return <div>Hello</div>
}
export default Hello;