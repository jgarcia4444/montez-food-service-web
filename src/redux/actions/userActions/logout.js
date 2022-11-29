import ReactGA from 'react-ga';
const logout = () => {
    ReactGA.initialize('G-7380SQJ6M9');
    ReactGA.event({
        category: "Account",
        action: "User Logged Out Of Account",
        label: "User Log Out"
    });
    return {
        type: "USER_LOGOUT"
    }
}

export default logout;