import React from 'react'
import LinearProgress from 'material-ui/LinearProgress';
import './style.css'

function Loader(props) {

    return (
        <div className="container-loader">
            <LinearProgress mode="indeterminate" />
        </div>
    )
}

Loader.propTypes = {
}

export default Loader