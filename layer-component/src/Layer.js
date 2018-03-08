import React, {Component} from 'react'

class Layer extends Component{
    constructor(){
        super();
        this.state = {
            inputVal: ''
        }
    }
    
    componentDidMount() {
        const {hideLayer} = this.props;

        // 监听keydown事件，如果按下ESC键则弹框消失
        window.addEventListener('keydown',function(e){
            if(e.keyCode === 27){
                hideLayer();
            }
        }, false)
    }
    
    changeInputVal(e){
        const value = e.target.value;
        this.setState({
            inputVal: value
        })
    }
    submit(){
        const {hideLayer} = this.props;
        //表单为空时不进行表单提交
        if(!this.state.inputVal) {
            alert('请输入内容');
            return;
        };
        // 输出表单输入内容到控制台
        console.log('输入的内容:', this.state.inputVal)
        // 提交后重置表单
        this.resetInput();
        //弹框消失
        hideLayer();
    }
    resetInput(){
        this.setState({
            inputVal: ''
        })
    }
    render(){
        const {title, show, width, zIndex, hideLayer} = this.props;
        if(!show) return null;
        return (
            <div className="layer-component-wrapper">
                <div className="layer-mask" style={{ zIndex: zIndex - 1 }}></div>
                <div className="layer-component" style={{ zIndex: zIndex, width: width}}>
                    <p>{title}</p>
                    <div className="layer-input-box">
                        <input type="text" placeholder="请输入"
                            className="layer-input"
                            value={this.state.inputVal}
                            onChange={(e) => this.changeInputVal(e)}
                            />
                    </div>
                    <div className="layer-btn-box">
                        <button className="layer-btn cancel-layer-btn" onClick={(e) => hideLayer()}>Cancel</button>
                        <button className="layer-btn submit-layer-btn"
                            onClick={(e) => this.submit()}
                            >Submit</button>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Layer