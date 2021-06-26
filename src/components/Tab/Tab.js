import React, { Component } from 'react';

import styles from './Tab.module.css';

class Tab extends Component{
    state={
        showDeleteIcon: false
    }

    render(){
        let activeTabStyle= (
            this.props.currentTabId === this.props.tabId ? 
            {borderBottom: '2px solid #3486eb',
            fontWeight: 'bold'} : null);
        return(
            <div
            className={styles.Tab}
            style={activeTabStyle}
            onClick={()=>{this.props.selectedtab(this.props.tabId)}}
            onMouseOver={()=>{this.setState({showDeleteIcon : true})}}
            onMouseLeave={()=>{this.setState({showDeleteIcon : false})}}>
                Tab {this.props.tabId}
                {this.props.showDelete && this.state.showDeleteIcon ? (<button
                className={styles.DeleteTab}
                onClick={(event)=>{this.props.deleteTab(event,this.props.tabId)}}>
                    &#215;
                </button>) : null}
            </div>
        )

    } 
}

export default Tab;