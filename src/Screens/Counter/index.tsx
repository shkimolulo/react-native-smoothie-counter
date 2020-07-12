import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'

const Container = Styled.SafeAreaView`
    flex: 1;
`

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title ?: string;    // 필수 항목이 아닌 문자열 타입의 Props
    initValue: number;  // 필수 항목인 숫자형 타입의 Props
}

/*
- Counter 컴포넌트는 부모 컴포넌트로부터 전달받은 Props 인 initValue 를 초기값으로 가지고 State 생성
- State 는 숫자형 타입( useState<number>(initValue) )
- 자바스크립트에서 useState(initValue) 와 같이 작성할 수 있지만 타입스크립트에서는 initValue 가 정확히 어떤 타입인지 명시
 */
const Counter = ({ title, initValue }: Props) => {
    /*
    - count 변수는 값을 수정할 수 없는 불변값(Immutable)
    - State 는 컴포넌트 안에서 수정이 가능한 변수
    - 불변의 count 변수를 변경하기 위해 useState 가 set 함수를 같이 제공
    - State 변수값을 직접 변경하면서 발생할 수 있는 오류를 줄이고 리액트의 가상돔을 활용하여 변경된 부분만 화면을 갱신하기 위
     */
    const [count, setCount] = useState<number>(0);

    return (
        /*
        - Button 컴포넌트를 사용하기 위해서는 필수적으로 iconName 을 설정해야 함
        - onPress 에는 반환값이 없는 함수를 설정할 수 있음
        - onPress 에 setCount 함수를 사용하여 State 인 count 값을 변경하도록 설정
        */
        <Container>
            {(title != false) && (<TitleContainer><TitleLabel>{title}</TitleLabel></TitleContainer>)}
            <CountContainer>
                <CountLabel>{initValue + count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={() => setCount(count + 1)} />
                <Button iconName="minus" onPress={() => setCount(count - 1)} />
            </ButtonContainer>
        </Container>
    );
};

export default Counter;

/*
정리
- const [변수명, 변수를 변경할 set 함수] = useState<State의 타입>(초기값);
- 컴포넌트에서 State 를 사용하기 위해서는 useState 사용
- 값을 변경하기 위해서는 set 함수 사용
- 초기값에는 오브젝트(Object) 형식의 값도 설정할 수 있음
```
interface Props {...}
interface State {
    name:string;
    age: number;
}
...
const [uset, setUser] = useState<State>({
    name: '홍길동',
    age: '20,
});
```
 */
