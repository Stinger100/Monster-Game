let surveyModel = {
    title: 'Survey Intro',
    firstPageIsStarted: true,
    showProgressBar: 'top',
    startSurveyText: 'Start survey',
    pages: [
        {
            elements: [
                {
                    type: 'html',
                    html: ' <div class="jumbotron">\n' +
                        '        <h1 id="survey-title">Survey</h1>\n' +
                        '        <p>\n' +
                        '             Before you play, we ask you to take a short survey.\n' +
                        '        </p>\n' +
                        '        <p>Please click on <b>"Start survey"</b> button when you are ready.</p>' +
                        '    </div>'

                }
            ]
        },
        {
            name: 'page1',
            elements: [
                {
                    type: 'radiogroup',
                    name: 'question1',
                    title: 'How old are you?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'item1',
                            text: 'Less than 20 years old'
                        },
                        {
                            value: 'item2',
                            text: 'Between 20 and 25 years old'
                        },
                        {
                            value: 'item3',
                            text: 'More than 25 years old'
                        }
                    ]
                },
                {
                    type: 'radiogroup',
                    name: 'question2',
                    title: 'What is your gender?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'item1',
                            text: 'Female'
                        },
                        {
                            value: 'item2',
                            text: 'Male'
                        },
                        {
                            value: 'item3',
                            text: 'Other'
                        }
                    ]
                }
            ]
        },
        {
            name: 'page2',
            elements: [
                {
                    type: 'rating',
                    name: 'question3',
                    title: 'How well do you feel that you understand the directions for the activity today?',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'Directions are perfectly clear'
                },
                {
                    type: 'rating',
                    name: 'question4',
                    title: 'How hard do you think this game will be to play?',
                    isRequired: true,
                    minRateDescription: 'Not at all difficult',
                    maxRateDescription: 'Extremely'
                },
                {
                    type: 'rating',
                    name: 'question5',
                    title: 'How well do you expect to perform in the game?',
                    isRequired: true,
                    minRateDescription: 'Very badly',
                    maxRateDescription: 'Extremely well'
                },
                {
                    type: 'rating',
                    name: 'question6',
                    title: 'How competitive are you in your everyday life, for example when you play a game or participate in sports?',
                    isRequired: true,
                    minRateDescription: 'Not at all competitive',
                    maxRateDescription: 'Very competitive'
                }
            ]
        },
        {
            name: 'page3',
            elements: [
                {
                    type: 'rating',
                    name: 'question7',
                    title: 'I think a lot before I act',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question8',
                    title: 'I usually enjoy social interactions with people',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question9',
                    title: 'I am usually reserved with people I don\'t know well',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question10',
                    title: 'I enjoy meeting new people and developing new connections',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ],
            title: 'How well do think the following statements describe your own personality?'
        },
        {
            name: 'page4',
            elements: [
                {
                    type: 'rating',
                    name: 'question11',
                    title: 'I trust people easily',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question12',
                    title: 'I treat people fairly',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question13',
                    title: 'It makes me upset when people are not treated fairly by others',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question14',
                    title: 'I am very energetic',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page5',
            elements: [
                {
                    type: 'rating',
                    name: 'question15',
                    title: 'I am usually a happy person',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question16',
                    title: 'I am usually very talkative',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question17',
                    title: 'I like to come up with new ideas',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question18',
                    title: 'I like to make plans',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page6',
            elements: [
                {
                    type: 'rating',
                    name: 'question19',
                    title: 'It bothers me if my plans don\'t work',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question20',
                    title: 'I often find fault with others',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question21',
                    title: 'I am usually helpful and not selfish with others',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question22',
                    title: 'I like to take care of people',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page7',
            elements: [
                {
                    type: 'rating',
                    name: 'question23',
                    title: 'I am relaxed and don\'t get stressed easily',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question24',
                    title: 'If I am in a stressful situation, I can\'t function',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question25',
                    title: 'I am curious',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question26',
                    title: 'I am a reliable worker',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page8',
            elements: [
                {
                    type: 'rating',
                    name: 'question27',
                    title: 'I have a strong work ethic',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question28',
                    title: 'I often start arguments with other people',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question29',
                    title: 'I like to argue or debate ideas with other people ',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question30',
                    title: 'I like to get other people to do what I want',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page9',
            elements: [
                {
                    type: 'rating',
                    name: 'question31',
                    title: 'I am a deep thinker',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question32',
                    title: 'I like to be the best',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question33',
                    title: 'Other people often copy what I do',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question34',
                    title: 'If I am in a group, other people often let me make decisions',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page10',
            elements: [
                {
                    type: 'rating',
                    name: 'question35',
                    title: 'I get confused easily',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question36',
                    title: 'I am comfortable in all sorts of social gatherings',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question37',
                    title: 'I am usually very organized',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question38',
                    title: 'I forgive people easily',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page11',
            elements: [
                {
                    type: 'rating',
                    name: 'question39',
                    title: 'I have a very active imagination',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question40',
                    title: 'I rely mostly on my emotions to make decisions',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question41',
                    title: 'I like to have a lot of time to consider all of my options when making a decision',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question42',
                    title: 'I enjoy problem-solving',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        },
        {
            name: 'page12',
            elements: [
                {
                    type: 'rating',
                    name: 'question43',
                    title: 'I get frustrated easily',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                },
                {
                    type: 'rating',
                    name: 'question44',
                    title: 'I am very observant and often notice things that others overlook',
                    isRequired: true,
                    minRateDescription: 'Not at all',
                    maxRateDescription: 'This describes me extremely well'
                }
            ]
        }
    ],
    showTitle: false
}
export default  surveyModel