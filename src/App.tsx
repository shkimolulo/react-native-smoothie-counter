// p.106
import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
      /*
      - 만든 Counter 컴포넌트를 불러와서 화면에 표시
      - Counter 의 필수 Props 인 initValue 에는 숫자형 값인 5 대입
      - 옵션 Props 인 title 에는 문자열 데이터 대입, 필수가 아니므로 아래처럼 대입하지 않고도 사용 가능
      <Container>
        <Counter initValue={5}/>
      </Container>
       */
      <Container>
        <Counter title="This is a Counter App" initValue={5} />
      </Container>
  );
};

export default App;

// import React, { Fragment } from 'react';
// import {StatusBar, SafeAreaView, ScrollViewComponent} from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// import Styled from 'styled-components/native';
//
// const ScrollView = Styled.ScrollView`
//     background-color: ${Colors.lighter};
// `;
//
// const Body = Styled.View`
//     background-color: ${Colors.white};
// `;
//
// const SectionContainer = Styled.View`
//     margin-top: 32px;
//     padding-horizontal: 24px;
// `;
//
// const SectionDescription = Styled.Text`
//     margin-top: 8px;
//     font-size: 18px;
//     font-weight: 400;
//     color: ${Colors.dark};
// `;
//
// const HighLight = Styled.Text`
//     font-weight: 700;
// `;
//
// interface Props {}
//
// const App = ({ }: Props) => {
//   return (
//       <Fragment>
//         <StatusBar barStyle="dark-content"/>
//         <SafeAreaView>
//           <ScrollView contentInsetAdjustmentBehavior="automatic">
//               <Header/>
//               <Body>
//                 <SectionContainer>
//                   <SectionDescription>Step One</SectionDescription>
//                   <SectionDescription>
//                     Edit <HighLight>App.js</HighLight> to change this screen and then come back to see your edits.
//                   </SectionDescription>
//                 </SectionContainer>
//                 <SectionContainer>
//                   <SectionDescription>See Your Changes</SectionDescription>
//                   <SectionDescription>
//                     <ReloadInstructions/>
//                   </SectionDescription>
//                 </SectionContainer>
//                 <SectionContainer>
//                   <SectionDescription>Debug</SectionDescription>
//                   <SectionDescription>
//                     <DebugInstructions/>
//                   </SectionDescription>
//                 </SectionContainer>
//                 <SectionContainer>
//                   <SectionDescription>Learn More</SectionDescription>
//                   <SectionDescription>
//                     Read the docs to discover what to do next:
//                   </SectionDescription>
//                 </SectionContainer>
//                 <LearnMoreLinks/>
//               </Body>
//           </ScrollView>
//         </SafeAreaView>
//       </Fragment>
//   );
// };
// export default App;
