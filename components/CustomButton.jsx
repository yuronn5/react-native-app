import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8} disabled={isLoading} style={{ backgroundColor: '#FFA001', padding: 10, borderRadius: 5, width: '300px', marginTop: 20, ...containerStyles }}>
      <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', ...textStyles }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton