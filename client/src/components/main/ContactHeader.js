import React from "react";
import AvatarCircle from "./AvatarCircle";

export default function ContactHeader() {
    return (
        <div
            style={{
                background: "#039fc7",
                width: "100%",
                height: "100px",
                position: "relative",
            }}
        >
            <AvatarCircle
                size="70"
                position="absolute"
                top="50%"
                right="50%"
            ></AvatarCircle>
        </div>
    );
}
