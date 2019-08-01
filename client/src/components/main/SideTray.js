import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { contactSelected } from "../../store/actions";

const SideTrays = styled.div`
    position: absolute;
    width: 90px;
    height: auto;
    top: 41%;
    left: -90px;
    z-index: 1000;
    font-size: 12px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.5s;
    :hover {
        left: 0;
    }
    .trayIcon {
        padding: 15px 5px;
        border-bottom: 0.5px solid #f0f0f0;
        transition: all 0.3s;
    }
    .trayIcon:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        background-color: #f0f0f0;
        cursor: pointer;
    }
    .trayIcon i {
        margin-right: 10px;
    }
`;

const Beacon = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: -44%;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 35px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #039fc7;
    :hover {
        cursor: pointer;
    }
`;

function SideTray(props) {
    const { selectedStatus } = props;
    const homeRoute = () => {
        props.location.pathname === "/"
            ? selectedStatus()
            : props.history.push("./");
    };
    const addRoute = () => {
        props.history.push("./add-contact");
    };
    const blockRoute = () => {
        props.history.push("./blocked");
    };
    return (
        <SideTrays>
            <div className="trayIcon" onClick={homeRoute}>
                <i class="fas fa-home" />
                Home
            </div>
            <div to="/add-contact" className="trayIcon" onClick={addRoute}>
                <i class="fas fa-user-plus" />
                Add
            </div>
            <div className="trayIcon" onClick={blockRoute}>
                <i className="fas fa-user-lock" />
                Blocked
            </div>
            <Beacon>
                <i class="fas fa-star"></i>
            </Beacon>
        </SideTrays>
    );
}

// const mapStateToProps = state => ({
//     error: getContactsError(state),
//     contacts: getContacts(state),
//     pending: getContactsPending(state),
// });
const mapDispatchToProps = dispatch => {
    return {
        selectedStatus: () => {
            dispatch(contactSelected(false));
        },
    };
};
export default connect(
    null,
    mapDispatchToProps
)(SideTray);
