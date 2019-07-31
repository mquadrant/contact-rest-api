import React from "react";
import Avatar from "./AvatarCircle";

export default function ContactList(props) {
    const { fname, lname, phone } = props;
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "0px 5px",
            }}
        >
            <Avatar></Avatar>
            <div
                style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    marginLeft: "10px",
                }}
            >
                <div>{`${fname} ${lname}`}</div>
                <div>{`${phone}`}</div>
            </div>
        </div>
    );
}
