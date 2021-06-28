import React, { Component, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Tab from '../Tab/Tab';

import styles from './Tabs.module.css';

const Tabs = (props) =>{
    const tabsRef = useRef();

    const scrollLeftHandler = () =>{
        tabsRef.current.scrollBy({
            left: -120,
            behavior: 'smooth'
        })
    }
    const scrollRightHandler = () =>{
        tabsRef.current.scrollBy({
            left: 120,
            behavior: 'smooth'
        })
    }
        console.log("[Tabs.js] props", props)
        let leftChevron=null;
        let rigthChevron=null;
        if(props.tabs.length > 4){
            leftChevron=(props.currentTabId !== props.tabs[0].tabId ?
                <span
                className={styles.Chevron}
                onClick={scrollLeftHandler}>
                    &#8249;
                </span> : null);
            rigthChevron=(props.currentTabId !== props.tabs[props.tabs.length - 1].tabId ?
                <span
                className={styles.Chevron}
                onClick={scrollRightHandler}>
                    &#8250;
                </span> : null);
        }
        return(
            <div className={styles.Header}>
                {leftChevron}
                <DragDropContext onDragEnd={props.dragDropHandler}>
                    <Droppable droppableId="droppableId-1" direction="horizontal">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className={styles.Tabs} ref={tabsRef}>
                            {props.tabs.map((tab, index) => (
                                <Draggable key={tab.tabId} draggableId={tab.tabId.toString()} index={index}>
                                {(provided) =>(
                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                        <Tab
                                    currentTabId={props.currentTabId}
                                    tabId={tab.tabId}
                                    showDelete={props.tabs.length > 1 ? true : false}
                                    selectedtab={props.selectedtab}
                                    deleteTab={props.deleteTab}/>
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
                disabled={props.tabs.length >=10 ? true : false}
                onClick={props.addTab}>
                    &#43;
                </button>
            </div>
            
        )
}

export default Tabs;