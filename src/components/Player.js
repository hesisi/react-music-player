import React,{ Component } from 'react';
import { Icon ,Layout ,Menu ,Input ,Progress ,Row ,Col} from 'antd';

class Player extends React.Component{
    render(){
        return (
            <Row type="flex" justify="space-between" align="middle">
                <Col>
                    <div style={{width:50,height:50,overflow:"hidden"}}>
                        <img src={require("../static/images/playCover.jpg")} style={{width:50}}/>
                    </div> 
                </Col>
                <Col>
                    <Icon type="left-circle" style={{color:"#D04741",fontSize:30,margin:"0 8px"}}/>
                    <Icon type="play-circle" style={{color:"#D04741",fontSize:30,margin:"0 8px"}}/>
                    <Icon type="right-circle" style={{color:"#D04741",fontSize:30,margin:"0 8px"}}/>
                </Col>
                <Col span={12} style={{marginLeft:20,marginRight:20}}>
                    <div className="flexContainer">
                        <div>
                            <span style={{color:"#000"}}>Picture to burn </span>
                            <span style={{marginLeft:10,color:"#666"}}>Taylor Swift</span>
                        </div>
                        <div>
                            <span>01:12/05:34</span>
                        </div>
                    </div>
                    
                    <Progress percent={18} showInfo={false} size="small"/>
                </Col>
                <Col span={4}>
                    <Row>
                        <Col span={3}>
                            <Icon type="sound"  style={{color:"#848484",fontSize:16,margin:"4px 5px"}}/>
                        </Col>
                        <Col span={20}>
                            <Progress percent={30} size="small" />
                        </Col>
                    </Row>  
                </Col>
                <Col span={3} style={{textAlign:'right'}}>
                    <Icon type="heart" style={{color:"#D04741",fontSize:18,margin:"0 10px"}}/>
                    <Icon type="retweet" style={{color:"#848484",fontSize:18,margin:"0 10px"}}/>
                    <Icon type="bars" style={{color:"#848484",fontSize:18,margin:"0 10px"}}/>
                </Col>
            </Row>
        );
    }
}

export default Player;