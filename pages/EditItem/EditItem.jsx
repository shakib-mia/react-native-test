import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const EditItem = () => {
    const [text, setText] = useState()
    return (
        <View>
            <TextInput />
        </View>
    );
};

export default EditItem;