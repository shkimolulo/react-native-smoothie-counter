import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName: 'plus' | 'minus'; // 필수 항목 -> iconName 설정하지 않으면 런타임 중이 아닌 IDE 에서 에러 발생
    onPress?: () => void;   // 반환 값이 없는 함수를 설정해야 하지만 필수 항목("?:") 은 아님
}

/*
- Button 컴포넌트는 IconName, onPress 라는 두 가지 Props 를 가지고 있음
- 우리가 현재 만들고 있는 Button 컴포넌트에서 값을 지정하여 사용하는 것이 아니라 Button 컴포넌트를 불러와 사용하는 부분에서 값을 지정하여 사용
 */
const Button = ({ iconName, onPress }: Props) => {
    return (
        /*
        Container
        - 리액트 네이티브의 TouchableOpacity 컴포넌트로서 onPress 의 Props(속성값)
        - TouchableOpacity 의 onPress 에 우리가 만든 컴포넌트가 부모로부터 받을 onPress 의 Props 와 연결시킴

        Icon
        - 리액트 네이티브의 Image 컴포넌트로서 source 에 표시하고자 하는 이미지 지정
        - require 로 기본 사이즈 이미지 연결하고, 기본 사이즈 외에 2x, 3x 크기의 이미지 갖고 있다면,
          해당 단말기 화면 사이즈에 맞는 이미지 사이즈 자동으로 불러와 표시
         */
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                    ? require('~/Assets/Images/add.png')
                    : require('~/Assets/Images/remove.png')
                }
            />
        </Container>
    );
};

export default Button;
