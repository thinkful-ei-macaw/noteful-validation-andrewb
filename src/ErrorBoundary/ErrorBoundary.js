import React from 'react'
import Proptypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return(
                <h2>Error!</h2>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: Proptypes.any.isRequired
}

export default ErrorBoundary