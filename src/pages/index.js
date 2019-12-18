import React from "react";
import Layout from "../components/layout"
import Navigation from '../components/navigation'
import "./style.css"
import {
    NavItem,
    NavLink
} from 'reactstrap'

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
        this.onNewGroup = this.onNewGroup.bind(this);
        this.handleCitiSelect = this.handleCitiSelect.bind(this);
        this.handleGroupSelect = this.handleGroupSelect.bind(this);
        this.handleProfSelect = this.handleProfSelect.bind(this);
    }

    handleCitiSelect = () => {
        this.setState(
            {
                citiOption: this.refs.theTextLugNacInput.value
            }
        );
    };
    handleGroupSelect = () => {
        this.setState(
            { groupOption: this.refs.theTextGroupInput.value }
        );
    };
    handleProfSelect = () => {
        this.setState(
            { proffesorOption: this.refs.theTextProffesorInput.value }
        );
    };   

    render() {
        return (
            <div>
                <Navigation>
                    <NavItem>
                        <NavLink className="text-white" href="/groups/">Grupos</NavLink>
                    </NavItem></Navigation>
                <Layout/>
            </div>
        )
    }
}

export default MainContainer;