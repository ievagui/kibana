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



const MarkdownVisComponent = ({
  fontSize,
  markdown,
  openLinksInNewTab,
  renderComplete,
}: MarkdownVisComponentProps) => {
  useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.

  console.log(markdown);
  return (markdown);
    /*
    <div className="mkdVis" style={{ fontSize: `${fontSize}pt` }}>
      <Markdown
        data-test-subj="markdownBody"
        markdown={markdown}
        openLinksInNewTab={openLinksInNewTab}
      />
    </div>
    */
};

class MarkdownVisClass extends React.Component{
  //useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.
  
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

  //private onHandleChange(event) {
  //  this.setState({value: event.target.value});
  //  event.preventDefault();
  //}

  private getAge(val){
    fetch("https://api.agify.io/?name=" + val)
      .then(res => res.json())
      .then(
        (response) => {
          if(response.age != null){
            this.setState({age: response.age});
          }else{
            this.setState({age: "no such client"});
          }
        });
  }

  public render()
  //{return(<p>hello</p>);}
  {
    return (
      <div className="mkdVis">
        <EuiFormRow fullWidth label="Client name">
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
        <EuiText grow={false}>
          <p>
            Predicted age: {this.state.age}
          </p>
        </EuiText>
      </div>
    );
  }
}
//}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { MarkdownVisClass as default};
//<p>aa{this.aa.markdown}bb</p>
