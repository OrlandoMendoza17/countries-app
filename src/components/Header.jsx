const Header = (props) =>{
    const {toggleDarkMode, darkModeOn} = props;

    return (
        <header>
            <nav className="navbar">
                <div className="logo"><h2>Where in the world?</h2></div>
                <div className="dark-mode-container">
                    <button onClick={toggleDarkMode} type="button" id="dark-mode-btn"><ion-icon size="medium" name={darkModeOn ? "moon" : "moon-outline"} id="moon-icon"></ion-icon><p>Dark Mode</p></button>
                </div>
            </nav>
        </header>
    )
}

export default Header;