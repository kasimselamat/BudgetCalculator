import React from 'react';

class Navigation extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p className='f4 pointer pa4'>Sign Out</p>
            </nav>
        );
    }
}

export default Navigation;