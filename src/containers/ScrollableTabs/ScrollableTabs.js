import React, {Component} from 'react';

import Tabs from '../Tabs/Tabs';
import Modal from '../../components/UI/Modal/Modal';
import styles from './ScrollableTabs.module.css';

class ScrollableTabs extends Component{
    state={
        tabs: [{tabId: 1, content: 'Tab 1 content'}, {tabId: 2, content: 'Tab 2 content'}, {tabId: 3, content: 'Tab 3 content'}],
        selectedTabId: 1,
        maxTabId: 3,
        tabIdToDelete: null,
        showModal: false,
    }

    selectTabHandler = (id) =>{
        console.log("[ScrollableTabs.js] selected", id);
        if(id === this.state.selectedTabId){
            console.log("[ScrollableTabs.js] selected No change", id);
        }
        else{
            this.setState({
                selectedTabId: id
            })
        }
    }

    addTabHandler = () => {
        let length = this.state.tabs.length;
        if(length < 10){
            let {maxTabId} = {...this.state}
            this.setState(prevState => ({
                tabs: prevState.tabs.concat({tabId: maxTabId+1, content: `Tab ${maxTabId+1} content`}),
                maxTabId: maxTabId+1,
            }))
        }
    }

    deleteTabHandler = (id) => {
        console.log("ScrollableTabs.js deleteId", id)
        let delIndex = this.state.tabs.findIndex(tab => tab.tabId === id);
        let updatedTabs= [...this.state.tabs].filter(tab => tab.tabId !== id);
        let newSelId = updatedTabs[delIndex] ? updatedTabs[delIndex].tabId : updatedTabs[updatedTabs.length - 1].tabId;
        console.log("ScrollableTabs.js newSelId", newSelId)
        this.setState({
            tabs: updatedTabs,
            selectedTabId: (id === this.state.selectedTabId ? newSelId : this.state.selectedTabId),
            showModal: false
        })
    }

    openModalHandler = (event,id) => {
        event.stopPropagation();
        this.setState({
            tabIdToDelete: id,
            showModal: true
        })
    }
    closeModalHandler = (confirmation) =>{
        if(confirmation === true){
            this.deleteTabHandler(this.state.tabIdToDelete)
        }
        this.setState({
            tabIdToDelete: null,
            showModal: false
        })
    }
    dragDropHandler = (result) => {
        console.log("ScrollableTabs.js drag result ", result);
        const srce = {...result.source};
        const dest = {...result.destination};
        let newTabsList = [];
        if(srce.index && dest.index){
            let srceItem = {...this.state.tabs[srce.index]}
            let destItem = {...this.state.tabs[dest.index]}
            newTabsList = this.state.tabs.map((tab, index)=>{
                if(index === srce.index){
                    return destItem
                }
                else if(index === dest.index){
                    return srceItem;
                }
                else{
                    return tab
                }
            })
            this.setState({
                tabs: newTabsList
            })
        }
    }

    render(){
        console.log("ScrollableTabs.js tabs", this.context)
        
        let mainContent = this.state.tabs.filter(tab => (tab.tabId === this.state.selectedTabId));
        console.log("ScrollableTabs.js mainContent", mainContent);

        return(
            <div className={styles.ScrollableTabs}>
                <Tabs 
                tabs={this.state.tabs}
                currentTabId={this.state.selectedTabId}
                selectedtab={this.selectTabHandler}
                addTab={this.addTabHandler}
                deleteTab={this.openModalHandler}
                dragDropHandler={this.dragDropHandler}
                />
                <main className={styles.tabMainContent}>
                    <p>
                        {mainContent[0]?.content ? mainContent[0]?.content : "Select a Tab"}
                    </p>
                </main>
                {this.state.showModal ? <Modal
                                        tabIdToDelete={this.state.tabIdToDelete}
                                        show={this.state.showModal}
                                        closeModal={this.closeModalHandler} /> : null}
            </div>
        )
    }
}

export default ScrollableTabs;