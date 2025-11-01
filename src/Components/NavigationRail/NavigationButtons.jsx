import React from 'react'

const NavigationButtons = ({ listOfButtons = [{
    ButtonIcon: 'Button',
    ButtonText:'Button',
    onMouseEnter: () => { },
    onMouseLeave: () => { },
}
],expanded=false
}) => {
    return (
        <div className='flex flex-col justify-center p-4'>
            {listOfButtons.map((button,index) => 
                <button
                key={index}
                    onMouseEnter={button.onMouseEnter}
                    onMouseLeave={button.onMouseLeave}
                // onClick={() => {
                //     dispatchRailState({ railState: railStates.hover })
                // }
                // }
                className='flex flex-row
                    p-2
                 justify-start items-center gap-2
                 rounded-2xl hover:bg-blue-400
                 '
                >
                    <span className=''>{button.ButtonIcon}</span>
                    {expanded && <p className=' 
                    truncate text-clip transition-all 
                    text-2xl
                    delay-200 ease-in-out transition-discrete'>{button.ButtonText}</p>}
                </button>
            )}
        </div>
    )
}

export default NavigationButtons