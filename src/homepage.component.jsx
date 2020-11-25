import React from 'react'
import PropTypes from 'prop-types'

import './homepage.styles.scss';

const HomePage = props => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Title</h1>
                        <span className="subtitle">Subtitle</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage
