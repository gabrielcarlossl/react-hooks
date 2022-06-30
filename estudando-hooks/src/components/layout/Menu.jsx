import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/useState"> &#10132; useState()</Link>
                </li>
                <li>
                    <Link to="/useEffect"> &#10132; useEffect()</Link>
                </li>
                <li>
                    <Link to="/useRef"> &#10132; useRef()</Link>
                </li>
                <li>
                    <Link to="/useMemo"> &#10132; useMemo()</Link>
                </li>
                <li>
                    <Link to="/useCallback"> &#10132; useCallback()</Link>
                </li>
                <li>
                    <Link to="/useContext"> &#10132; useContext()</Link>
                </li>
                <li>
                    <Link to="/useReducer"> &#10132; useReducer()</Link>
                </li>
                <li>
                    <Link to="/useCustom"> &#10132; useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu