import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

interface IRadioGroupItem {
  value: any;
  text: string;
}

interface props {
  radios: Array<RadioGroup>;
  activeColor?: string;
  onSelect?: any;
}

interface state {
  radios: Array<RadioGroup>;
  styles: any;
  selectedIndex?: number;
}

class RadioGroupItem implements IRadioGroupItem {
  constructor(public value: any, public text: string) {}
}

class TqanzRadioButton extends React.Component<props, state> {
  public static defaultProps: Partial<props> = {
    onSelect: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      radios: props.radios,
      styles: {
        ...defaultStyles,
        ...props.styles
      }
    };
  }
  onSelect(index, value) {
    this.setState({
      selectedIndex: index
    });

    this.props.onSelect(index, value);
  }

  protected getTextColor(index) {
    const { selectedIndex } = this.state;
    if (index === selectedIndex) {
      return {
        color: this.props.activeColor
      };
    } else {
      return {};
    }
  }

  protected renderGroup = (a: Array<RadioGroupItem>) => {
    if (a === undefined) a = new Array<RadioGroupItem>();

    // FOR TESTING
    // a.push(new RadioGroupItem(1, "Single"));
    // a.push(new RadioGroupItem(1, "Double"));

    return a.map((info, index) => (
      <RadioButton
        key={info.value}
        value={info.value}
        style={this.state.styles.radio_button}
        activeColor={this.props.activeColor}
        color={this.props.activeColor}
      >
        <Text
          key={info.text}
          style={[this.state.styles.radio_text, this.getTextColor(index)]}
        >
          {info.text}
        </Text>
      </RadioButton>
    ));
  };

  render() {
    const styles = this.state.styles;
    return (
      <View>
        <RadioGroup
          onSelect={this.onSelect.bind(this)}
          style={styles.radio_group}
        >
          {this.renderGroup(this.props.radios)}
        </RadioGroup>
      </View>
    );
  }
}

const defaultStyles = {
  radio_text: {},
  radio_group: {},
  radio_button: {}
};

export default TqanzRadioButton;
