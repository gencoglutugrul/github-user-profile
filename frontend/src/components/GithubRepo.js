import React, { Component } from 'react'

export class GithubRepo extends Component {
    render() {
        return (
            <div>
               <p>{this.props.repo.full_name}</p>
               <p>{this.props.repo.html_url}</p>
               <p>{this.props.repo.description}</p>
               <p>{this.props.repo.language}</p>
            </div>
        )
    }
}

export default GithubRepo
