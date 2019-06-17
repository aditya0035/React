import React,{Suspense} from 'react'
export default (WrappedComponent) => {
    const hocComponent = ({ ...props }) => (<Suspense fallback={<div>Loading...</div>}><WrappedComponent {...props} />
    </Suspense>)
    return hocComponent
}
