import { NavLink } from "react-router-dom";
import React from "react";
import styles from './Link.module.css';

// Definição da interface para as props
interface LinkProps {
  to: string;
  label: string;
}

const Link: React.FC<LinkProps> = ({ to, label }) => {
  return (
    <div className={styles.links}>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        {label}
      </NavLink>
    </div>
  );
};

export default Link;
