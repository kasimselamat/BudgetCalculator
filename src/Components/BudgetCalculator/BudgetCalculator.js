import React from 'react';

class BudgetCalculator extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <form className="pa4 black-80 br3 shadow-5 w-70 center">
                <div className="measure center w-70">
                    <label htmlFor="income" className="f6 b db mb2">Income Amount: </label>
                    <input id="income" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={ this.props.onIncomeChanges }/>
                    <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="#0" onClick={ this.props.onButtonEnter }>Enter</a>
                </div>
            </form>
        );
    }
}

export default BudgetCalculator;