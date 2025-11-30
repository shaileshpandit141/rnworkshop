import useColors from '@/hooks/useColors';
import React from 'react';
import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from 'react-native';
import { Text } from './Text';
import { View } from './View';

interface GroupSectionProps {
    containerStyle?: ViewStyle | ViewStyle[];
    titleStyle?: TextStyle | TextStyle[];
    title: string;
    children?: React.ReactNode;
}

const GroupSection: React.FC<GroupSectionProps> = ({
    containerStyle,
    titleStyle,
    title,
    children
}) => {
    const colors = useColors();

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.title, { color: colors.neutral.mid }, titleStyle]}>
                {title}
            </Text>
            {children}
        </View>
    );
};

export { GroupSection };

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
        paddingInline: 8,
        paddingTop: 12,
    },
    title: {
        textTransform: "capitalize",
        fontSize: 12
    },
})