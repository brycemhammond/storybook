import React from 'react';
import { shallow } from 'enzyme';
import RadioButtonType from '../types/RadioButtons';

describe('RadioButtons', () => {
  let knob;

  beforeEach(() => {
    knob = {
      name: 'Colors',
      value: '#00ff00',
      options: {
        Green: '#00ff00',
        Red: '#ff0000',
      },
    };
  });

  describe('displays value', () => {
    it('correctly maps option keys and values', () => {
      const wrapper = shallow(<RadioButtonType knob={knob} />);

      const green = wrapper.find('option').first();
      expect(green.text()).toEqual('Green');
      expect(green.prop('value')).toEqual('#00ff00');
    });
  });
});
