import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login, getUser } from '../store/actions/userActions.js'
import { Sec1 } from '../cmps/Sec1.jsx'
import { Sec2 } from '../cmps/Sec2.jsx'
import { Sec3 } from '../cmps/Sec3.jsx'

class Home extends React.Component {

    render() {

        return (
            <main className="home-container">
                <Sec1></Sec1>
                <Sec2></Sec2>
                <Sec3></Sec3>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)