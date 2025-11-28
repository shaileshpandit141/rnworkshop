import useThemeColors from '@/hooks/useColors';
import { Text as DefaultText } from 'react-native';

export function Text(props: DefaultText['props']) {
  const colors = useThemeColors();
  const { style, ...otherProps } = props;

  return <DefaultText style={[{ color: colors.neutral.light }, style]} {...otherProps} />;
}
