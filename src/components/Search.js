import React from 'react';
import { Input } from 'antd';

const SearchInput = Input.Search;
class Search extends React.Component{
    render(){
        return (
            <div>
                
                <SearchInput
                    placeholder="请输入"
                    onSearch={value => console.log(value)}
                    style={{ width: 400,margin:"20px 20px"}}
                />
            </div>
        );
    }
}

export default Search;