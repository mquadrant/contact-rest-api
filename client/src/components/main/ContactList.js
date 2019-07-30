import React from "react";
import Avatar from "./AvatarCircle";

export default function ContactList() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 5px",
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
                <div>Name</div>
                <div>08123456789</div>
            </div>
        </div>
    );
}
