import React from 'react';
import './style.css';

class Bounce extends React.Component {
    ref = React.createRef()
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio > 0.1) {
                    this.setState({
                        visible: true
                    })
                }
                else {
                    this.setState({
                        visible: false
                    })
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: [0, 1.0]
            }
        )
        if (this.ref.current) {
            observer.observe(this.ref.current)
        }
    }
    render() {
        console.log('Bounce')
        return (
            <div className="wrapper">
                <div ref={this.ref} className={this.state.visible ? 'bounce' : 'no-effect'}>
                </div>
                <div className="code"><h3>css</h3></div>
            </div>
        )
    }
}

export default Bounce