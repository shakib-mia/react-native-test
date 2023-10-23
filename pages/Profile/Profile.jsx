import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { posts } from '../../constants';

const Profile = ({ route, navigation }) => {
    // console.log(route);
    const { _id } = route.params;
    console.log(_id);
    const { profilePic, firstName, lastName } = posts[_id]
    return (
        <View style={{ height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{
                uri: profilePic
            }} />
            <Text>{firstName} {lastName}</Text>

            <Button onPress={() => navigation.navigate('Edit Profile')} title='Edit Your Profile' />
        </View>
    );
};

export default Profile;