import { getSelectedNodeTimestamps } from '.'
import { mock } from '../../mocks/getMockGraphData/mockResponse.ts'

const selectedNode = [
  {
    boost: 0,
    date: 1657670400,
    description: 'The evolution of web2, problems associated with it and why more versions of the web are emerging ',
    episode_title: 'Synonym Spaces - A Web of Lies',
    guests: [
      {
        name: 'John Carvalho',
        profile_picture: 'https://pbs.twimg.com/profile_images/1601964735016177676/c1mAfspt_400x400.jpg',
        ref_id: 'f28f037f-a3af-48af-bdd3-28023219b524',
        twitter_handle: 'BitcoinErrorLog',
      },
      {
        name: 'Gr0kchain',
        profile_picture: 'https://pbs.twimg.com/profile_images/1551823759102836736/8RDMVQEy_400x400.png',
        ref_id: '3a912989-28c1-40e6-bb1c-59fed1ec8e90',
        twitter_handle: 'gr0kch8n',
      },
      {
        name: 'Ar Nazeh',
        profile_picture: 'https://pbs.twimg.com/profile_images/1580586949823397888/Jhq3opXW_400x400.jpg',
        ref_id: '4463125b-7ca5-4e98-961c-20460e03777c',
        twitter_handle: 'ArNazeh',
      },
    ],
    hosts: [
      {
        name: 'Synonym ',
        profile_picture: 'https://pbs.twimg.com/profile_images/1509611612692484098/21wQpOvO_400x400.jpg',
        ref_id: 'e799d963-54fb-4439-bb88-3bcff10ec9f9',
        twitter_handle: 'Synonym_to',
      },
    ],
    image_url:
      'https://d1gd7b7slyku8k.cloudfront.net/knowledge-graph-joe/content-images/63e0cbc0-731d-4ea0-9dd2-2b8b841eb28a_s.jpg',
    keyword: false,
    latitude: null,
    link: 'https://www.youtube.com/watch?v=0XiNuMOdWbY',
    longitude: null,
    node_type: 'youtube',
    pub_key: '',
    ref_id: '95f71ca1-b9aa-4443-bb22-fa4fec4b6392',
    show_title: 'Synonym',
    source_link: null,
    text: 'web Two. I guess we should start to talk about what maybe the narrative is about the problems of web two, and what kind of things people kind of complain about and why people try to invent more versions of the web, going from web three to five and peer to peer web, et cetera.',
    timestamp: '00:16:45-00:28:27',
    topics: ['Web2', 'web Content creation', 'Microsoft'],
    type: 'clip',
    weight: 1,
    scale: 1.5,
    id: '95f71ca1-b9aa-4443-bb22-fa4fec4b6392',
    x: -131.91781073473317,
    y: 1024.0217900546818,
    z: -1133.6755971189862,
  },
]

describe('test getSelectedNodeTimestamps', () => {
  test('should return null if no selected node', () => {
    expect(getSelectedNodeTimestamps(mock.exact, null)).toBe(null)
  })

  test('should return 0 if selected node not in node', () => {
    expect(getSelectedNodeTimestamps(mock.exact, selectedNode)).toHaveLength(0)
  })
})
