import React from "react";
import items from './data'

const RoomContext = React.createContext();


class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }
    // getData {}
    render() {
        return(
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export{RoomProvider, RoomConsumer, RoomContext}