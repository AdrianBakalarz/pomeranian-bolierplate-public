import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from './../Components/Icons/HouseIcon';

import { ElementIcon } from './../Components/Icons/ElementIcon';

import { EditIcon } from './../Components/Icons/EditIcon';
import { CalendarIcon } from './../Components/Icons/CalendarIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="cv">
              <HouseIcon className="menu-icon" />
              CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon className="menu-icon" />
              Kalendarz
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
