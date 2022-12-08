import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../components";

export const LoginScreenContainer = styled(View)`
  background-color: #570d57;
  flex: 1;
  padding: 26px;
`;

export const PrimaryButton = styled(Button)`
  width: 333px;
  height: 56px;
  color: #fff;
  background-color: linear-gradient(
    359.93deg,
    #ac0aa6 -19.92%,
    #ef8aeb 138.86%
  );
  border: 2px solid rgba(255, 255, 255, 0.2);
  /* box-shadow: 0px 2px 3.13274px rgba(16, 24, 40, 0.12),
    0px 6px 6px rgba(16, 24, 40, 0.04); */
  border-radius: 57.73px;
`;

export const CTAText = styled(Text)`
  color: #fff;
  font-weight: 600;
  font-size: 18.667px;
  line-height: 22px;
  font-family: "Rubik";
  text-align: center;
`;

export const LoginScreen = () => {
  return (
    <SafeArea>
      <LoginScreenContainer>
        <View style={{ flex: 1 }}>{/* logo */}</View>

        <View style={{ flex: 1, alignItems: "center" }}>
          {/* slider */}
          <CTAText>
            {" "}
            Welcome to Streak {"\n"} Enter your number to get started
          </CTAText>
          <Button> Enter Mobile Number</Button>
          <PrimaryButton> Continue</PrimaryButton>
        </View>
      </LoginScreenContainer>
    </SafeArea>
  );
};
