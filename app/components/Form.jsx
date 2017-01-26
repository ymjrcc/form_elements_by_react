import React,{Component} from 'react';
import classnames from 'classnames';
import style from '../css/style.css';

class TextInput extends Component{

    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return <input type='text' onChange={this.handleInputChange}/>
    }
}

class TextAreaInput extends Component{

    constructor(props){
        super(props);

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

        this.state = {
            textareaValue: ''
        };
    }

    handleTextAreaChange(e){
        this.setState({
            textareaValue: e.target.value
        });
    }

    render(){
        return <textarea type='text' onChange={this.handleTextAreaChange}/>
    }
}

class RadioGroup extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            radioValue: ''
        };
    }

    handleChange(e){
        this.setState({
            radioValue: e.target.value
        })
    }

    render(){

        const {radioValue} = this.state;

        return (
            <div>
                <label className={style.radioLabel}>
                    <input type="radio" onChange={this.handleChange} name="city" value="Beijing" checked={radioValue === "Beijing"} />
                     Beijing 
                </label>

                <label className={style.radioLabel}>
                    <input type="radio" onChange={this.handleChange} name="city" value="Shanghai" checked={radioValue === "Shanghai"} />
                     Shanghai 
                </label>

                <label className={style.radioLabel}>
                    <input type="radio" onChange={this.handleChange} name="city" value="Hangzhou" checked={radioValue === "Hangzhou"} />
                     Hangzhou 
                </label>
            </div>
        )
    }
}

class CheckboxGroup extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            checkedArr: []
        };
    }

    handleChange(e){
        const {checked,value} = e.target;
        let {checkedArr} = this.state;

        if(checked && checkedArr.indexOf(value) === -1){
            checkedArr.push(value);
        }else{ 
            {/* 如果点击的那项是已勾选的，就把该项从数组移除 */}
            checkedArr = checkedArr.filter(i => i!=value);
        }
        this.setState({checkedArr});
    }

    render(){
        const {checkedArr} = this.state;
        return (
            <div>
                <label className={style.radioLabel}>
                    <input type="checkbox" onChange={this.handleChange} name="habbits" value="reading" checked={checkedArr.indexOf('reading') !== -1} />
                     reading 
                </label>

                <label className={style.radioLabel}>
                    <input type="checkbox" onChange={this.handleChange} name="habbits" value="coding" checked={checkedArr.indexOf('coding') !== -1} />
                     coding 
                </label>

                <label className={style.radioLabel}>
                    <input type="checkbox" onChange={this.handleChange} name="habbits" value="cooking" checked={checkedArr.indexOf('cooking') !== -1} />
                     cooking 
                </label>
            </div>
        )
    }
}

class SingleSelect extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            area: ''
        };
    }

    handleChange(e){
        this.setState({area: e.target.value});
    }

    render(){
        const {area} = this.state;

        return (
            <select value={area} onChange={this.handleChange}>
                <option value="Beijing">Beijing</option>
                <option value="Shanghai">Shanghai</option>
                <option value="Hangzhou">Hangzhou</option>
            </select>
        )
    }    
}

class SelectMultiple extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            area: []
        };
    }

    handleChange(e){
        const {options} = e.target;
        {/*注意 options 是对象，不是数组*/}
        const area = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value);

        this.setState({area});
    }

    render(){
        const {area} = this.state;

        return (
            <select multiple={true} value={area} onChange={this.handleChange}>
                <option value="reading">reading</option>
                <option value="coding">coding</option>
                <option value="cooking">cooking</option>
            </select>
        )
    }
}

class Form extends Component{

    render(){
        return(
            <div className={style.formBox}>
                <h2>Form Elements by React</h2>
                <div className={style.formItem}>
                    <label>input：<TextInput/></label> 
                </div>
                <div className={style.formItem}>
                    <label>textarea：<TextAreaInput/></label> 
                </div>
                <div className={style.formItem}>
                    <div>radio: </div>
                    <RadioGroup />
                </div>
                <div className={style.formItem}>
                    <div>checkbox: </div>
                    <CheckboxGroup />
                </div>
                <div className={style.formItem}>
                    select: <SingleSelect />
                </div>
                <div className={style.formItem}>
                    multiple select: <SelectMultiple />
                </div>
            </div>
        )
    }
}

export  default Form;