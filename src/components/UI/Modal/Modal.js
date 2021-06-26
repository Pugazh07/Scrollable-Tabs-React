import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

 const modal = (props) => {
     console.log("[Modal.js] props", props)
        return(
            <React.Fragment>
                <Backdrop show={props.show} clicked={()=>props.closeModal(false)} />
                <div 
                className={styles.Modal}
                style={{transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
                opacity: props.show ? '1' : '0'}}>
                    <header>Alert</header>
                    <section>Are you sure to delete Tab {props.tabIdToDelete}?</section>
                    <footer>
                    <button className={styles.Cancel} onClick={() => props.closeModal(false)}>
                        No
                    </button>
                    <button className={styles.Confirm} onClick={() => props.closeModal(true)}>
                        Yes
                    </button>
                    </footer>
                </div>
            </React.Fragment>
        )
}

export default modal;