import React from 'react'
import NavBarItem from '../../components/NavBarItem/NavBarItem'
import './NavBarContainer.css'

const NavBarCountainer = (props) => {
    return(
        <div className='NavBarContainer'>
            <ul>
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} name='Home' link='#' />
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} name='City' link='#' />
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} name='Arena' link='#' />
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} name='Guilds' link='#' />
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} name='Ranking' link='#' />
                <NavBarItem changePage={props.changePage} currentPage={props.currentPage} icon='fas fa-angle-down' name='Vip' link='#' />
            </ul>
        </div>
    );
}

export default NavBarCountainer;