import React from 'react';
import {Form, TextArea, Button, Menu, Segment} from 'semantic-ui-react'
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Contents, {Paragraph} from '../components/Contents';

class CallForSpeakersPage extends React.Component {
    state = {
        activeForm: 'req'
    };

    render() {
        const {activeForm} = this.state;

        return (
            <div className="wrap">
                <Head>
                    <title>Call for Speakers - 2017 FEConf Korea</title>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                </Head>
                <Header/>
                <Hero/>
                <Main className="call-for-speakers" title="Call For Speakers">
                    <div className="call-for-speakers__contents">
                        <Contents title="연사 신청 및 추천">
                            <Paragraph>
                                우리는 인터넷에서 쉽게 접할 수 있는 이야기가 아니라 실무 경험을
                                바탕으로 한 의미있고 창의적인 주제를 공유하는 프론트엔드 컨퍼런스를
                                개최하고자 합니다. 연사의 경험에 경의를 보내고 참여자 모두 영감을
                                받을 수 있는 교육적이고 고무적인 행사를 만들기 위해 노력하고 있습니다.
                            </Paragraph>
                            <Paragraph>
                                우리는 이러한 목표에 함께 하고 싶은 분을 찾고 있습니다.
                            </Paragraph>
                            <Paragraph>
                                여러분의 소중한 프론트엔드 경험을 이 컨퍼런스에서 함께 나누고 싶거나
                                혹은 그러한 분을 알고 계시다면 망설이지 말고 연사 신청 및 추천을 해주시길
                                바랍니다. 누군가를 추천한 모든 분에게 소정의 선물을 드립니다 :)
                            </Paragraph>
                            <Paragraph>
                                FECONF.KR은 10월 중 서울에서 개최할 예정입니다. 조만간 장소와
                                날짜가 확정되면 공식 홈페이지를 통해 공지하겠습니다.
                            </Paragraph>
                            <Paragraph>
                                지금도 프론트엔드를 창조하고 있는 개발자, 바로 당신을 기다리고 있습니다.
                            </Paragraph>
                            <div className={`call-for-speakers__forms ${activeForm}`}>
                                <Menu attached='top' tabular>
                                    <Menu.Item active={activeForm === 'req'} name='신청' onClick={() => {this.setState({activeForm: 'req'})}}/>
                                    <Menu.Item active={activeForm === 'rec'} name='추천' onClick={() => {this.setState({activeForm: 'rec'})}}/>
                                </Menu>
                                <Segment className="call-for-speakers__form-req" attached='bottom'>
                                    <Form>
                                        <Form.Field>
                                            <label>이름</label>
                                            <input placeholder='신청 하시는 분의 이름을 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>이메일</label>
                                            <input placeholder='사용하시는 이메일을 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>연락처</label>
                                            <input placeholder='연락 가능한 연락처를 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>주제</label>
                                            <input placeholder='발표하실 주제를 입력해 주세요'/>
                                        </Form.Field>
                                        <Form.Group grouped>
                                            <label>범주</label>
                                            <Form.Field label='&nbsp;UX/UX, JavaScript, HTML, CSS, Web Assembly, Performance, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Node.js, IoT, Security, Back-end, Browser Core, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Unit Test, E2E Test, UI Test, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Functional, Reactive, Prototype Programming and other Programming Paradigm.' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label="&nbsp;Career, Developer's Life, Philosophy, Approach, etc..." control='input' type='radio' name='subject-kind' />
                                        </Form.Group>
                                        <Form.Field control={TextArea} label='하고싶은 말' placeholder='요청사항, 바라는 점 등 하고싶은 말을 자유롭게 적어주세요.' />
                                        <Button type='submit'>Submit</Button>
                                    </Form>
                                </Segment>
                                <Segment className="call-for-speakers__form-rec" attached='bottom'>
                                    <Form>
                                        <Form.Field>
                                            <label>추천 대상자</label>
                                            <input placeholder='추천 대상자의 이름을 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>추천 대상자 이메일</label>
                                            <input placeholder='추천 대상자의 이메일을 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>추천 대상자 연락처</label>
                                            <input placeholder='추천 대상자의 연락 가능한 연락처를 입력해주세요.'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>듣고싶은 주제</label>
                                            <input placeholder='추천 대상자를 통해서 듣고 싶은 주제를 입력해 주세요'/>
                                        </Form.Field>
                                        <Form.Group grouped>
                                            <label>범주</label>
                                            <Form.Field label='&nbsp;UX/UX, JavaScript, HTML, CSS, Web Assembly, Performance, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Node.js, IoT, Security, Back-end, Browser Core, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Unit Test, E2E Test, UI Test, etc...' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label='&nbsp;Functional, Reactive, Prototype Programming and other Programming Paradigm.' control='input' type='radio' name='subject-kind' />
                                            <Form.Field label="&nbsp;Career, Developer's Life, Philosophy, Approach, etc..." control='input' type='radio' name='subject-kind' />
                                        </Form.Group>
                                        <Form.Field control={TextArea} label='추천하는 이유' placeholder='님께서 이 분을 추천하는 이유를 말씀해주세요' />
                                        <Form.Field>
                                            <label>이메일</label>
                                            <input placeholder='추천하시는 분의 이메일을 입력해주세요.'/>
                                        </Form.Field>
                                        <Button type='submit'>Submit</Button>
                                    </Form>
                                </Segment>
                            </div>
                        </Contents>
                    </div>
                </Main>
            </div>
        );
    }
}

export default CallForSpeakersPage;
