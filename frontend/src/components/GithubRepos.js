import axios from 'axios'
import React, { Component } from 'react'
import authService from '../services/authService'
import GithubRepo from './GithubRepo'

export class GithubRepos extends Component {
    constructor(props){
        super(props)
        this.state={
            userRepos: [],
            isLoading: true,
            notFound: false
        }
        this.getUserRepos = this.getUserRepos.bind(this)
    }

    componentDidMount(){
        this.getUserRepos()
    }

    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            this.getUserRepos()
        }
    }

    getUserRepos(){
        this.setState({
            userRepos: [],
            isLoading: true,
            notFound: false
        })
        axios.get("/api/github/" + this.props.user + "/repos").then(response => {
            this.setState({
                userRepos: response.data.slice(0,10), // get only 10 of them, they are already ordered
                isLoading: false
            })
        }).catch(err => {
            console.log(err)
            if(err.response.status === 404){
                this.setState({
                    notFound: true,
                    isLoading: false
                })
            }else if(err.response.status === 401){
                authService.logout()
                window.location.reload()
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <p>Loading...</p> : ( 
                    this.state.notFound || this.state.userRepos.length===0 ? <p>Sorry we can't find any repo</p>:
                    this.state.userRepos.map(repo => <GithubRepo key={repo.id} repo={repo} />)
                )}
            </div>
        )
    }
}

export default GithubRepos
