import React from 'react';
import { Image, Text, View } from 'react-native';

const Post = ({ _id, firstName, lastName, time, content, profilePic, onPress }) => {
    return (
        <View key={_id} style={{ padding: 10, borderColor: '#aaaaaaaa', borderRadius: 5, borderWidth: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{
                    uri: profilePic
                }} />
                <View>
                    <Text onPress={onPress} style={{ fontWeight: '600' }}>{firstName} {lastName}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
            <Text>{content}</Text>
        </View>
    );
};

export default Post;