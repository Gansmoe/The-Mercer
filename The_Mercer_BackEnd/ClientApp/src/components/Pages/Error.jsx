import React from 'react';

export class Error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: ''
        }
    }

    componentDidCatch(err) {
        console.log(err);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error.toString() };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error-bg'>
                    <h4>Uh-oh. Something broke:</h4>
                    <p>{this.state.error}</p>
                    <p>Please contact system administrator.</p>
                </div>
            )
        }

        else {
            return this.props.children;
        }
    }
}