import React from 'react';

class TableResult extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="pa4">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Income</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Needs (50%)</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Wants (30%)</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Savings / Debt (20%)</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy" id='table-body'>
                        

                    </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default TableResult;