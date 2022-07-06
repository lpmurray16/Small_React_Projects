import React from "react";

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null,
    };

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "989827087624-nd7dtiav6kmh9uvkeqbkj5sjuesjupve.apps.googleusercontent.com",
                    scope: "email",
                    plugin_name: "rivi",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading...</div>
                </div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.onSignInClick}
                    className="ui blue google button"
                >
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return (
            <div className="header__link header__link--right">
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;
