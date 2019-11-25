import React from 'react';
import './style.css';
import gif from '../../assets/gif4.gif';

class FadeOut extends React.Component {
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
                if (entry.intersectionRatio === 1) {
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
                threshold: 1.0
            }
        )
        if (this.ref.current) {
            observer.observe(this.ref.current)
        }
    }
    render() {
        console.log('FadeOut')
        return (
            <div className="wrapper">
                <div ref={this.ref} className={this.state.visible ? "fade-out" : 'no-effect'}>
                    <img className={this.state.visible ? 'fadeOut-gif' : 'no-effect'} src={gif} alt='gif' />
                </div>
                <div className="code"><h3>css</h3></div>
            </div>
        )
    }
}

export default FadeOut