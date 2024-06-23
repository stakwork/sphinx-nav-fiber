import { Node } from '~/types';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const adaptTweetNode = (node:any): Node => {
    const { properties, ref_id: refId } = node;

    return {
        boost: properties.boost || 0,
        children: [],
        x: 0,
        y: 0,
        z: 0,
        edge_count: 0,
        hidden: false,
        colors: [],
        date: properties.date,
        description: '',
        episode_title: properties.episode_title || '',
        hosts: [],
        guests: [],
        id: '',
        image_url: properties.image_url,
        sender_pic: '',
        sender_alias: '',
        message_content: '',
        keyword: false,
        label: '',
        source_link: properties.source_link || '',
        link: properties.link || '',
        name: properties.name,
        node_type: 'Tweet',
        ref_id: refId,
        scale: 1,
        show_title: properties.show_title || '',
        text: properties.text,
        timestamp: '',
        topics: [],
        type: properties.type || '',
        weight: 0,
        tweet_id: properties.tweet_id,
        posted_by: undefined,
        twitter_handle: properties.twitter_handle,
        profile_picture: '',
        verified: properties.verified,
        unique_id: '',
        properties: {},
        media_url: '',
    };
};