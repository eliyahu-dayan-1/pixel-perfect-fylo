import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
// import { getUser, update, loadUsers } from '../store/actions/userActions.js'

class NavBar extends Component {
    render() {
        return (
            <header className="nav-content-wrapper flex space-between">
                <div className="logo align-center"></div>
                <nav className="links flex">
                   <a href="">Sign In</a> 
                   <a href="">Team</a> 
                   <a href="">Features</a> 
                </nav>
            </header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // loggedUser: state.user.loggedInUser 

    }
}
    const mapDispatchToProps = {
        // setBoards

    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))