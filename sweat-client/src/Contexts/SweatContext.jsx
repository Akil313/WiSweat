import React, { useContext, useState } from 'react'

const SweatContext = React.createContext();
const SweatUpdateContext = React.createContext();

const blankSweat = {
    "_id": "",
    "sweatName": "",
    "groupId": "",
    "time": "",
    "location": "",
    "attending": []
}

export function useSweat() {
    return useContext(SweatContext)
}

export function useSweatUpdate() {
    return useContext(SweatUpdateContext)
}

export function SweatProvider({ children }) {
    const [sweat, setSweat] = useState(blankSweat);

    return (
        <SweatContext.Provider value={sweat}>
            <SweatUpdateContext.Provider value={setSweat}>
                {children}
            </SweatUpdateContext.Provider>
        </SweatContext.Provider>
    )
}