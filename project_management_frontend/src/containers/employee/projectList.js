import React from 'react'
import Project from './project';


class ProjectList extends React.Component {

    render() {
        return (
            <div className="container-projects">
                <Project username={this.props.data.username} employeeProjects={this.props.data.manager.projects}/>
            </div>
        )
    }
}

export default ProjectList
