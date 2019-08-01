import React from 'react'
import ManagerProject from './ManagerProject';


class ManagerProjectList extends React.Component {

    render() {        
        return (
            <div className="container-projects">
                <ManagerProject username={this.props.data.username} managerProjects={this.props.data.projects}/>
            </div>
        )
    }
}

export default ManagerProjectList
