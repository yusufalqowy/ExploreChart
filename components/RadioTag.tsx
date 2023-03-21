import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface RadioTagProps {
    label: string;
    condition: boolean;
    onPress: () => void;
    disabled?: boolean;
}

const RadioTag: FC<RadioTagProps> = ({
    label,
    condition,
    onPress,
    disabled,
}) => {
    const textColor = {
        color: condition ? '#E01319' : '#8E8E8E',
    };

    return (
        <Pressable
            style={[condition ? styles.selectedSort : styles.sort, styles.mr10]}
            onPress={onPress}
            disabled={disabled}
        >
            {condition && (
                <MaterialCommunityIcons
                    name="check"
                    style={styles.mr4}
                    size={16}
                    color='red'
                />
            )}
            <Text style={[styles.sortText, textColor]}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    selectedSort: {
        backgroundColor: '#FFE9E9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#E01319',
        borderRadius: 20,
    },
    sort: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#8E8E8E',
        borderRadius: 20,
    },
    sortText: {
        fontSize: 14,
        lineHeight: 20,
    },
    mr10: {
        marginRight: 10,
    },
    mr4: {
        marginRight: 4,
    },
});

export default RadioTag;
