import * as React from 'react';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";
export interface IModsContentEditorState {
  sampleStateProperty: string;
}

export interface IModsContentEditorProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  value: string;
  isEditMode: boolean;
  updateFunction: Function;
}


export default class ModsContentEditor extends React.Component<IModsContentEditorProps, IModsContentEditorState, {}> {

  constructor(props: IModsContentEditorProps) {
    super(props);
    this.state = {
      sampleStateProperty: this.props.value
    };
  }

  public updateValues(text: string){
    //this.setState({sampleStateProperty : text});
    this.props.updateFunction(text);
    return text;
  }

  // private onTextChange(newText: string): string {
  //   this.setState({ sampleStateProperty: newText });
  //   return newText;
  // }

  public render(): React.ReactElement<IModsContentEditorProps> {
    console.log(this.props.value)
    let richText;
    if (this.props.isEditMode) {      
      richText = <><RichText value={this.props.value} onChange={(text) => this.updateValues(text)} /></>
    } else {
      richText = <>
        <div>Some special container
        <div dangerouslySetInnerHTML={{ __html: this.props.value }}></div>
        </div>
      </>
    }

    return (
      richText
    );
  }
}
