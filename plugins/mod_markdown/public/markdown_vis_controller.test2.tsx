/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect } from 'react';
import { Markdown } from '../../../src/plugins/kibana_react/public';
import { MarkdownVisParams } from './types';
import axios from 'axios'

import './markdown_vis.scss';

import { FormattedMessage, I18nProvider } from '@kbn/i18n-react';

import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldSearch,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EmbeddableRenderer,
  EuiPanel,
} from '@elastic/eui';

interface MarkdownVisComponentProps extends MarkdownVisParams {
  renderComplete: () => void;
}

/*function getAge(val){
    fetch("https://api.agify.io/?name=" + val)
      .then(res => res.json())
      .then(
        (response) => {
          //this.setState({
          //  age: response.age
          //});
          console.log(response.age)
          return(response.age);
        });
  }*/



const MarkdownVisComponent = ({
  fontSize,
  markdown,
  openLinksInNewTab,
  renderComplete,
}: MarkdownVisComponentProps) => {
  useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.
  //console.log(getAge(markdown))
  
  // nothing happens
  const buttonClick = async() => {
    const response = await fetch('https://api.agify.io/?name=steve');
    const json = await response.json();
    return json.age;
  }


/*
  const buttonClick = async() => {
    //const data = await axios.get('https://api.agify.io/?name=' + 'who');
    //console.log(data)
    //return data.age;
    await fetch("https://api.agify.io/?name=steve")
      .then(res => res.json())
      .then(
        (response) => {
          //this.setState({
          //  age: response.age
          //});
          console.log(response.age)
          return(response.age);
        });
  }*/

  return (
    <div className="mkdVis" style={{ fontSize: `${fontSize}pt` }}>
      <p>Hello {buttonClick()}</p>
    </div>
  );
};

export { MarkdownVisComponent as default };

  //useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.
 /* 
  constructor(props){
    super(props);
    //const this.aa = ({fontSize, markdown, openLinksInNewTab, renderComplete}: MarkdownVisComponentProps) => {useEffect(renderComplete);}
    //{fontSize, markdown, openLinksInNewTab, renderComplete}: MarkdownVisComponentProps

    this.state = {
      value: '',
      buttonPushed: false,
      age: '',
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  //private MarkdownVisComponent({fontSize, markdown, openLinksInNewTab, renderComplete,}: MarkdownVisComponentProps){
  //  console.log(markdown)
  //}

  private onClickHandler() {
    //this.setState({buttonPushed: !this.state.buttonPushed});
    this.getAge(this.state.value);
  }

  private onHandleChange(event) {
    this.setState({value: event.target.value});
    //this.getAge(event.target.value);
    event.preventDefault();
  }

  private getAge(val){
    fetch("https://api.agify.io/?name=" + val)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            age: response.age
          });
        });
  }

  public render()
  //{return(<p>hello</p>);}
  {
    
    return (
      <div className="mkdVis">
        <p>
          <FormattedMessage
            id="testVisPlugin.content"
            defaultMessage="Enter client name"
          />
        </p>
        <EuiFormRow fullWidth>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFieldText
                name="first"
                fullWidth
                value={this.state.value}
                onChange={(event) => this.setState({value: event.target.value})}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={this.onClickHandler}
              >
                Search
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFormRow>
        <p>Predicted age: {this.state.age}</p>
      </div>
    );
  }

//}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { MarkdownVisClass as default };
//<p>aa{this.aa.markdown}bb</p>
*/