import React, { Component } from 'react'
import {Card} from 'antd'
export class GithubRepo extends Component {
    render() {
        return (
            <div style={{ marginBottom:10 }}>
                <a href={this.props.repo.html_url} target="_blank">
                    <Card title={this.props.repo.full_name}>
                        <p>{this.props.repo.description}</p>
                        <p>{this.props.repo.language ? "Language: " + this.props.repo.language : ""}</p>
                    </Card>
                </a>
            </div>
        )
    }
}

export default GithubRepo
