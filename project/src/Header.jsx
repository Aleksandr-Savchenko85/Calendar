import React from 'react';


const Header = () => {
    return (
        <header class="header">
            <button class="button-create"><i class="fas fa-plus create-event-btn__icon"></i>Create</button>
            <div class="navigation-header">
                <button class="button-today" data-direction="today">Today</button>
                <button class="pointer_left" data-direction="prev"><i class="fas fa-chevron-left"></i></button>
                <button class="pointer_right" data-direction="next"><i class="fas fa-chevron-right"></i></button>
                <span class="text-month">August</span>
            </div>
        </header>




    )
};


export default Header;