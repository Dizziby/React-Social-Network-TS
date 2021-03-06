import React from "react";
import {Navigate, NavLink} from "react-router-dom";
import styles from "./Nav.module.css";
import {
    faPager,
    faMessage,
    faPerson,
    faPeopleGroup,
    faImage,
    faVideo,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SectionCSSType} from "../../../App";
import {logoutTC} from "../../../redux/reducers/authReducer";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";


type NavPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export const Nav = (props: NavPropsType) => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (props.section === "sectionLogout" || props.section === "sectionError") {
        return null;
    }

    const onClickHandlerLogout = () => {
        dispatch(logoutTC())
        // props.changeGrid("sectionLogout")
    }

    return (
        <div className={styles.nav}>
            <p className={styles.title}>Shortcuts</p>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPager} size="lg" pull="left"/>
                <NavLink to="profile" onClick={() => props.changeGrid("sectionAll")}>My Page</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faMessage} size="lg" pull="left"/>
                <NavLink to='messages' onClick={() => props.changeGrid("sectionMessages")}>Messages</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPerson} size="lg" pull="left"/>
                <NavLink to='friends/my' onClick={() => props.changeGrid("sectionAll")}>Friends</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPeopleGroup} size="lg" pull="left"/>
                <NavLink to='groups' onClick={() => props.changeGrid("sectionAll")}>Groups</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faImage} size="lg" pull="left"/>
                <NavLink to='photos' onClick={() => props.changeGrid("sectionAll")}>Photos</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faVideo} size="lg" pull="left"/>
                <NavLink to='videos' onClick={() => props.changeGrid("sectionAll")}>Videos</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" pull="left"/>
                <NavLink to='logout' onClick={onClickHandlerLogout}>Logout</NavLink>
            </div>
        </div>
    )
}