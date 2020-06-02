import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, Nav, NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';



class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen:false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }

    render(){
        return(
            <div className="header-primary">
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">CovidInfo</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link"  to='/home' style={{fontSize:"20px"}}><span className="fa fa-home fa-lg"></span>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/tracker' style={{fontSize:"20px"}}><span className="fa fa-info fa-lg"></span>Tracker</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/news' style={{fontSize:"20px"}}><span className="fa fa-info fa-lg">News</span></Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="container">
                    <Jumbotron className="header-primary-variant">
                        <h1 className="display-4 row">CovidInfo Organisation</h1>
                        <p className="lead">Lets Fight This Together</p>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Header;