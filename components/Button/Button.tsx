import React, { useContext } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import styled from "styled-components/native"
import { ThemeContext } from "styled-components"

interface MyButtonProps {
  onPress: () => void
  text: string
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  const themeContext = useContext(ThemeContext)
  console.log("Current theme: ", themeContext) // theme context works well

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ButtonTextStyled style={styles.text}>{text}</ButtonTextStyled>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "black" },
})

const ButtonTextStyled = styled.Text`
  font-size: 60px;
  ${(props) => console.log(props.theme)}// theme is an empty object
`
