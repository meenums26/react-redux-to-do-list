import React from 'react'

const Header = () => {
    return (
        <>
            <div className="headerSection">
                <div id="appLogo">
                    <span><b><h1>My Note Book</h1></b></span>
                </div>
                <div className="toggleLogo">
                <i className="fal fa-bars"></i>
                </div>
                <div className="menu">
                    <ul>
                        <li>Create</li>
                        <li>All Notes</li>
                        <li>My Favourites</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
