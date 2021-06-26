import React, { Component, createRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Tab from '../../components/Tab/Tab';

import styles from './Tabs.module.css';

class Tabs extends Component{
    tabsRef = createRef();

    scrollLeftHandler = () =>{
        this.tabsRef.current.scrollBy({
            left: -120,
            behavior: 'smooth'
        })
    }
    scrollRightHandler = () =>{
        this.tabsRef.current.scrollBy({
            left: 120,
            behavior: 'smooth'
        })
    }
    render(){
        console.log("[Tabs.js] props", this.props)
        let leftChevron=null;
        let rigthChevron=null;
        if(this.props.tabs.length > 4){
            leftChevron=(this.props.currentTabId !== this.props.tabs[0].tabId ?
                <span
                className={styles.Chevron}
                onClick={this.scrollLeftHandler}>
                    &#8249;
                </span> : null);
            rigthChevron=(this.props.currentTabId !== this.props.tabs[this.props.tabs.length - 1].tabId ?
                <span
                className={styles.Chevron}
                onClick={this.scrollRightHandler}>
                    &#8250;
                </span> : null);
        }
        return(
            
            <div className={styles.Header}>
                {leftChevron}
                <DragDropContext onDragEnd={this.props.dragDropHandler}>
                    <Droppable droppableId="droppableId-1" direction="horizontal">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className={styles.Tabs} ref={this.tabsRef}>
                            {this.props.tabs.map((tab, index) => (
                                <Draggable key={tab.tabId} draggableId={tab.tabId.toString()} index={index}>
                                {(provided) =>(
                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                        <Tab
                                    currentTabId={this.props.currentTabId}
                                    tabId={tab.tabId}
                                    showDelete={this.props.tabs.length > 1 ? true : false}
                                    selectedtab={this.props.selectedtab}
                                    deleteTab={this.props.deleteTab}/>
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {/* <div className={styles.Tabs}>
                    {tabs}
                </div> */}
                {rigthChevron}
                <button
                className={styles.AddTab}
                disabled={this.props.tabs.length >=10 ? true : false}
                onClick={this.props.addTab}>
                    &#43;
                </button>
            </div>
            
        )
    }
}

export default Tabs;