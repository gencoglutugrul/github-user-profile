import React, { Component } from 'react'
import axios from 'axios'
import {Card, Avatar} from 'antd'
const { Meta } = Card;

export class GithubUser extends Component {
    constructor(props){
        super(props)
        this.state={
            username: props.user,
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
        if(this.state.username !== prevProps.user)
            this.getUserInfos()
    }

    getUserInfos(){
        this.setState({
            info: null,
            isLoading: true,
            notFound: false
        })
        axios.get("/api/github/" + this.state.username).then(response => {
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

    /*
        {
            "html_url":"https://github.com/gencoglutugrul",
            "avatar_url":"https://avatars.githubusercontent.com/u/15321830?v=4",
            "name":"Tuğrul Gençoğlu",
            "location":"İzmir, Turkey",
            "bio":null
        }
     */
    render() {
        return (
            <div>
            {
                this.state.isLoading ? <p>Loading...</p> : 
                ( 
                    this.state.notFound || this.state.info === null ? 
                        <p>Sorry we can't find profile with name: {this.state.username}</p> :

                        <div>
                             <Card loading={this.state.isLoading}>
                                <Meta
                                    avatar={
                                    <Avatar src={this.state.info.avatar_url} />
                                    }
                                    title={this.state.info.name}
                                    description={
                                        this.state.info.location + " "+
                                        this.state.info.bio
                                    }
                                />
                            </Card>
                            <p><img src={this.state.info.avatar_url} alt={this.state.info.name} /></p>
                            <p>{this.state.info.html_url}</p>
                            <p>{this.state.info.name}</p>
                            <p>{this.state.info.location}</p>
                            <p>{this.state.info.bio}</p>
                        </div>
                )
            }
        </div>
        )
    }
}

export default GithubUser
