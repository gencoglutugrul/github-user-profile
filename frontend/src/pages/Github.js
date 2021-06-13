import React, { Component } from 'react'
import { Input, Row, Col, Divider } from 'antd';
import GithubUser from '../components/GithubUser'
import GithubRepos from '../components/GithubRepos'

const { Search } = Input;


export class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {githubUser: ""};
        this.onSearch = this.onSearch.bind(this);
      
      }
    
    onSearch(value){
        this.setState({
            githubUser: value
        });
    }

    render() {
        return (
            <div style={{ marginTop:"10%" }}>
                <Row>
                    <Col span={8} offset={8}>
                        <Search
                            placeholder="Github user"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={this.onSearch}
                        /> 
                        { this.state.githubUser.trim() !== '' ?
                        (<div>
                            <Divider />
                            <GithubUser user={this.state.githubUser} />
                            
                            <Divider />
                            <GithubRepos user={this.state.githubUser} />
                        </div>)
                        : ''}
                    </Col>
                </Row> 
                
            </div>
        )
    }
}

export default Github
