import useThemeColors from '@/hooks/useColors';
import { View as DefaultView } from 'react-native';


export function View(props: DefaultView['props']) {
    const colors = useThemeColors();
    const { style, ...otherProps } = props;

    return <DefaultView style={[{ backgroundColor: colors.core.background }, style]} {...otherProps} />;
}
