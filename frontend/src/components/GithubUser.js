import React, { Component } from 'react'
import axios from 'axios'
import {Card, Avatar} from 'antd'
const { Meta } = Card;

export class GithubUser extends Component {
    constructor(props){
        super(props)
        this.state={
            info: null,
            isLoading: true,
            notFound: false
        }
        this.getUserInfos = this.getUserInfos.bind(this)
    }

    componentDidMount(){
        this.getUserInfos()
    }

    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user)
            this.getUserInfos()
    }

    getUserInfos(){
        this.setState({
            info: null,
            isLoading: true,
            notFound: false
        })
        axios.get("/api/github/" + this.props.user).then(response => {
            this.setState({
                info: response.data,
                isLoading: false
            })
        }).catch(err => {
            console.log(err)
            if(err.response.status === 404){
                this.setState({
                    notFound: true,
                    isLoading: false
                })
            }
        })
    }

    render() {
        return (
            <div>
            {
                this.state.isLoading ? <p>Loading...</p> : 
                ( 
                    this.state.notFound || this.state.info === null ? 
                        <p>Sorry we can't find profile with name: {this.props.user}</p> :
                        <a href={this.state.info.html_url} target="_blank">
                            <Card loading={this.state.isLoading}>
                                <Meta
                                    avatar={
                                    <Avatar src={this.state.info.avatar_url} />
                                    }
                                    title={this.state.info.name ? this.state.info.name : this.props.user}
                                    description={
                                        (this.state.info.location ? this.state.info.location : "")
                                        + " "+
                                        (this.state.info.bio ? this.state.info.bio : "")
                                    }
                                />
                            </Card>
                        </a>
                        
                )
            }
        </div>
        )
    }
}

export default GithubUser
