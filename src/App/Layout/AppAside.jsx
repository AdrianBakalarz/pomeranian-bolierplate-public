import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from './../Components/Icons/HouseIcon';

import { ElementIcon } from './../Components/Icons/ElementIcon';

import { EditIcon } from './../Components/Icons/EditIcon';
import { CalendarIcon } from './../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

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
          <li>
            <NavLink className="aside-row" to="blog">
              <PersonalCardIcon className="menu-icon"></PersonalCardIcon>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FaqIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
