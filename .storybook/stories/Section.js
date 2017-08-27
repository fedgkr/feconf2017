import React from 'react';
import {storiesOf} from '@storybook/react';
import Section, {SectionCoverBasic, SectionCoverCard, SectionBody} from '../../components/Section';
import SpeakerCard from '../../components/SpeakerCard';
import SpeakerCardList from '../../components/SpeakerCardList';

storiesOf('Section', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px 0'}}>
            <Section>
                <SectionCoverBasic title="스피커" subTitle="SPEAKERS"/>
                <SectionBody>
                    <SpeakerCardList>
                        <SpeakerCard
                            picture='https://avatars2.githubusercontent.com/u/6267393?v=4&s=400'
                            name="조은"
                            company="우아한형제"
                            desc="눈먼 손으로 나는 삶을 만져보았네 그건 가시 투성이였어 가시투성이 삶의 온몸을 만지면서 나는 미소지었지 이토록 가시가 많으니 곧 장미꽃이 피겠구나라고."
                        />
                        <SpeakerCard
                            picture='https://avatars2.githubusercontent.com/u/1321707?v=4&s=460'
                            name="주우영"
                            company="레진엔터테인먼트"
                            desc="깊이 앓으십시오 앓음답도록 아름답도록"
                        />
                        <SpeakerCard
                            picture="https://avatars0.githubusercontent.com/u/19799263?v=4&s=460"
                            name="이두용"
                            company="레진엔터테인먼트"
                            desc="한때는 모든 것이 여기에 있었다 그렇다, 나는 삶을 불태우고 싶었다 다른 모든 것이 하찮은 것이 되어 버릴 때까지 다만 그것들은 얼마나 빨리 내게서 멀어졌는가"
                        />
                    </SpeakerCardList>
                </SectionBody>
            </Section>
        </div>
    ))
    .addWithInfo('Card', '', () =>  (
        <div style={{padding: '100px 0'}}>
            <Section>
                <SectionCoverCard title="스피커" subTitle="SPEAKERS">
                    개발의 가능성을 최대한 이끌어 내려면, 언어의 한계를 알아야만 한다.<br/><br/>
                    자바스크립트 구루이자 노련한 저자인 니콜라스 자카스는 이 책에서,<br/>
                    자바스크립트의 기초부터 DOM, Ajax, HTML5까지를 설명한다.<br/><br/>
                    상황에 따라 자바스크립트를 어떤 식으로 확장할 수 있는지,<br/>
                    역동적인 사용자 인터페이스는 어떻게 만들 수 있는지를 풍부한<br/>
                    예제를 곁들여 알려준다.<br/><br/>
                    2017.10.21 9:30 ~ 16:30 @Seoul
                </SectionCoverCard>
                <SectionBody>
                    <SpeakerCardList>
                        <SpeakerCard
                            picture='https://avatars2.githubusercontent.com/u/6267393?v=4&s=400'
                            name="조은"
                            company="우아한형제"
                            desc="눈먼 손으로 나는 삶을 만져보았네 그건 가시 투성이였어 가시투성이 삶의 온몸을 만지면서 나는 미소지었지 이토록 가시가 많으니 곧 장미꽃이 피겠구나라고."
                        />
                        <SpeakerCard
                            picture='https://avatars2.githubusercontent.com/u/1321707?v=4&s=460'
                            name="주우영"
                            company="레진엔터테인먼트"
                            desc="깊이 앓으십시오 앓음답도록 아름답도록"
                        />
                        <SpeakerCard
                            picture="https://avatars0.githubusercontent.com/u/19799263?v=4&s=460"
                            name="이두용"
                            company="레진엔터테인먼트"
                            desc="한때는 모든 것이 여기에 있었다 그렇다, 나는 삶을 불태우고 싶었다 다른 모든 것이 하찮은 것이 되어 버릴 때까지 다만 그것들은 얼마나 빨리 내게서 멀어졌는가"
                        />
                    </SpeakerCardList>
                </SectionBody>
            </Section>
        </div>
    ));
