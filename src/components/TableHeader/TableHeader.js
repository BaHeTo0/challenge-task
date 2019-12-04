import React from 'react'
import { MDBIcon } from 'mdbreact'
import './TableHeader.css'

const TableHeader = (props) => {

    let icon = (<MDBIcon icon="angle-down" />);
    if (props.displayTable) {
        icon = <MDBIcon icon="angle-up" />
    }
    return(
        <div onClick={props.click} className='tableHeader'>
            <span>Ranking table</span>
            {icon}
        </div>
    );
}

export default TableHeader;