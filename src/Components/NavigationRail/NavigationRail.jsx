import React, { useLayoutEffect, useReducer, useState } from 'react'
import Menu from '../Icons/Menu'
import NavigationButtons from './NavigationButtons'
import Worker from '../Icons/Worker'
import Account from '../Icons/Account'

const NavigationRail = () => {
    const railStates = {
        normal: 'normal',
        expanded: 'expanded',
        hover: 'hover',
        notHover: 'notHover'
    }

    const railReducer = (state, action) => {
        if (state === railStates.expanded && action.railState === railStates.hover) {
            return railStates.expanded
        }
        else if (state === railStates.expanded && action.railState === railStates.notHover) {
            return railStates.expanded
        }
        else if (state === railStates.normal && action.railState === railStates.hover) {
            return railStates.hover
        }
        else {
            return action.railState
        }
    }

    const initialState = window.innerWidth < 925 ? railStates.normal : railStates.expanded
    const [railState, dispatchRailState] = useReducer(railReducer, initialState)

    useLayoutEffect(() => {
        window.addEventListener('resize',
            () => {
                if (window.innerWidth < 925) {
                    dispatchRailState({ railState: railStates.normal })
                }
            }
        )

        return window.removeEventListener('resize ', () => { console.log("Task complete") })
    })

    return (
        <div
            className={`${railState === railStates.expanded ? 'w-80' : 'w-20'} z-10 transition-all ease-in-out duration-500`}>
            <div
                className={`bg-blue-100 h-dvh rounded-2xl rounded-s-none
                ${railState === railStates.expanded ? 'w-80' : railState === railStates.hover ? ' w-80' : 'w-20'} 
                transition-all ease-in-out duration-500`}
            >
                <div className='flex flex-col justify-center content-between h-dvh'>
                    <div className='flex flex-col flex-1'>
                        <button
                            onClick={() => {
                                if (railState === railStates.normal || railState === railStates.notHover) {
                                    dispatchRailState({ railState: railStates.expanded })
                                }
                                else {
                                    dispatchRailState({ railState: railStates.normal })
                                }
                            }}
                            className={`p-3 ps-6 w-full flex justify-start transition-transform ease-in-out duration-500`}
                        >
                            <Menu expanded={railState === railStates.expanded}
                                className={`h-8 w-8 ${railState === railStates.expanded ? 'rotate-0' : 'rotate-180'} transition-transform ease-in-out`} />
                        </button>
                        <NavigationButtons
                            listOfButtons={[
                                {
                                    ButtonText: 'Hire Worker',
                                    ButtonIcon: <Worker className='h-8 w-8' />,
                                    onMouseEnter: () => {
                                        dispatchRailState({ railState: railStates.hover })
                                    },
                                    onMouseLeave: () => {
                                        dispatchRailState({ railState: railStates.notHover })
                                    }
                                },
                                {
                                    ButtonText: 'Hire Worker',
                                    ButtonIcon: <Worker className='h-8 w-8' />,
                                    onMouseEnter: () => {
                                        dispatchRailState({ railState: railStates.hover })
                                    },
                                    onMouseLeave: () => {
                                        dispatchRailState({ railState: railStates.notHover })
                                    }
                                }
                            ]
                            }
                            expanded={railState === railStates.expanded || railState === railStates.hover}
                        />
                    </div>
                    <div className='flex flex-col'>

                        <div
                            className={`flex flex-row justify-around p-4 mb-18 truncate text-clip`}
                            onMouseEnter={() => {
                                dispatchRailState({ railState: railStates.hover })
                            }}
                            onMouseLeave={() => {
                                dispatchRailState({ railState: railStates.notHover })
                            }}
                        >
                            <span className='ps-2'><Account className='h-8 w-8' /></span>
                            <p className={`text-2xl delay-200 truncate 
                            text-clip ease-in-out transition-discrete
                            ${railState === railStates.expanded || railState === railStates.hover ? 'opacity-100' : 'opacity-0'}
                            `}

                            >Mrugendra</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationRail