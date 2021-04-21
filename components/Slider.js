import React from 'react'
import { View, Text, Slider as ReactSlider } from 'react-native'


export default function Slider({ max, unit, step, value, onChange }) {

  state = {
    value: 0
  }

  return (
    <View>
      <ReactSlider
        step={step}
        value={value}
        minimumValue={0}
        onValueChange={onChange} />
    </View>
  )

}