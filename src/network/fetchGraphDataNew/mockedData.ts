import { FetchGDataResponse } from './types'

export const MOCKED_NODES_EDGES: FetchGDataResponse = {
  edges: [
    {
      attributes: {
        decision_type: 'ML',
      },
      edge_type: 'RELATED_TO',
      source: 'b30aeba5-54a8-4227-8f05-79798a721996',
      target: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
    },
  ],
  nodes: [
    {
      attributes: {
        Data_Bank: 'Ethereum,Ticker Ethereum',
        date_added_to_graph: '1708751258.8079817',
        muted_topic: true,
        namespace: 'default',
        pubkey: '',
        ref_id: 'b30aeba5-54a8-4227-8f05-79798a721996',
        spelling_verification: false,
        topic: 'Ethereum,Ticker Ethereum',
      },
      weight: 0,
      node_type: 'Topic',
      ref_id: 'b30aeba5-54a8-4227-8f05-79798a721996',
    },
    {
      attributes: {
        Data_Bank: 'Litecoin,Ticker Litecoin',
        date_added_to_graph: '1708751258.8079817',
        muted_topic: false,
        namespace: 'default',
        pubkey: '',
        ref_id: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
        spelling_verification: true,
        topic: 'Litecoin,Ticker Litecoin',
      },
      weight: 0,
      node_type: 'Topic',
      ref_id: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
    },
  ],
}
