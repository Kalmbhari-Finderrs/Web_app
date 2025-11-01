import React, { useReducer, useState } from 'react'

const NavigationRail = () => {
    const railStates = {
        normal: 'normal',
        expanded: 'expanded',
        hover: 'hover'
    }
    const railReducer = (state, action) => {
        return action.railState
    }
    const [isExpanded, dispatchRailState] = useReducer(railReducer, railStates.expanded)
    return (
        <div
            className={`bg-blue-200 h-dvh rounded-2xl ${railState === railStates.expanded ? 'w-80' : 'w-20'} 
            
            transition-all ease-in-out duration-500`}
        >
            <button
                onClick={() => {
                    if (railState === railStates.normal) {
                        dispatchRailState({ railState: railStates.expanded })
                    }
                    else{
                        dispatchRailState({railState:railStates.normal})
                    }
                }}
            >
                exp
            </button>
        </div>
    )
}

export default NavigationRail