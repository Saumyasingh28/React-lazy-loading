import React from 'react';
import Bounce from '../Bounce/index'
import Rotate from '../Rotate/index'
import FadeIn from '../FadeIn/index'
import Flip from '../Flip/index'
import FadeOut from '../FadeOut/index'

class Home extends React.Component {
    render() {
        console.log('Home');
        return (
            <div>
                <Bounce />
                <Rotate />
                <FadeIn />
                <Flip />
                <FadeOut />
            </div>
        )
    }
}

export default Home;