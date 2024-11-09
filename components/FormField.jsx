import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "./../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ marginBottom: 10, marginTop: 30, ...otherStyles }}>
      <Text style={{ fontSize: 16, color: "#D1D5DB", fontWeight: "500" }}>
        {title}
      </Text>

      <View
        style={{
          width: "100vw",
          height: 64,
          maxWidth: "300px",
          paddingHorizontal: 16,
          backgroundColor: "#1A1A1A",
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "#2C2C3A",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            color: "#FFFFFF",
            fontWeight: "600",
            fontSize: 16,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
