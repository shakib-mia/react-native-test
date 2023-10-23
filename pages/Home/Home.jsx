import React from 'react';
import { Image, Text, View } from 'react-native';
import { posts } from '../../constants';
import Post from '../../components/Post/Post';

const Home = ({ navigation }) => {
    return (
        <View style={{ padding: 10, display: 'flex', gap: 10, height: '100%' }}>
            {posts.map((props) => <Post onPress={() => navigation.navigate("Profile", {
                _id: props._id
            })} {...props} key={props._id} />)}



            <View style={{ position: "absolute", bottom: 10, right: 10, zIndex: 999 }}>
                {/* <Text onPress={() => navigation.navigate('Chat')}>chat</Text> */}
                <Image onPress={() => navigation.navigate('Chat')} source={{ uri: 'https://static-00.iconduck.com/assets.00/chat-icon-2048x2048-i7er18st.png' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
        </View>
    );
};

export default Home;