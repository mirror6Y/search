import React, { Component } from 'react';
import { Input } from 'antd';


class Search extends Component {

    render() {

        const { Search } = Input;

        return (

            <Search
                enterButton="Search"
                // size="large"
                onSearch={value => console.log(value)}
                style={{ width: '45%' }}
            />

        );
    }
}

export default Search;