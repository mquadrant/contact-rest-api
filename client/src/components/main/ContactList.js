import React from "react";

export default function ContactList() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 5px",
            }}
        >
            <div
                style={{
                    width: "50px",
                    borderTop: "5px",
                    borderRadius: "48%",
                    height: "50px",
                    backgroundColor: "black",
                }}
            ></div>
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
