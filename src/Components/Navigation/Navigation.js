import React from 'react';

// const Navigation = (onChangeRoute, isSignedIn) => {
    
// }

class Navigation extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div>
            { (!this.props.isSignedIn)
                ?   <nav style={{display:'flex', justifyContent:'flex-end'}}>
                        <p  onClick={() => this.props.onChangeRoute('signin')}
                            className='f4 pointer pa4'>Sign In
                        </p>
                        <p  onClick={() => this.props.onChangeRoute('register')}
                            className='f4 pointer pa4'>Register
                        </p>
                    </nav>
                :   <p className='f4 pointer pa4'>Sign Out</p>
            }
            </div>
        );
    }
}

export default Navigation;