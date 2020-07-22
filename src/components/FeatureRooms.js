import React from "react";
import {RoomContext} from "../context";

export default class FeatureRooms extends React.Component {
    static contextType = RoomContext
    render() {
        const {greeting, name} = this.context
        console.log(greeting)
        return (
            <div>Hello from Feature room {}</div>
        )
    }

}