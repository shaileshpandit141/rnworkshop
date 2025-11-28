import useColors from "@/hooks/useColors";
import { Route as TRoute } from "@/screens";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from "../ui";

interface RouteProps extends TRoute {
    isLast: boolean;
}

const Route = (props: RouteProps) => {
    const colors = useColors();
    const { isLast, name, path, icon } = props;
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.core.surface,
                borderBottomColor: colors.core.border,
                borderBottomWidth: isLast ? 0 : StyleSheet.hairlineWidth,
            }
        ]}>
            <Link href={path} style={styles.link}>
                <View style={styles.linkContainer}>
                    <View style={styles.startContainer}>
                        <Ionicons name={icon.start} size={22} color={colors.neutral.light} />
                        <Text style={[styles.name, {color: colors.neutral.light}]}>{name}</Text>
                    </View>
                    <Ionicons name={icon.end} size={14} color={colors.neutral.light} />
                </View>
            </Link>
        </View>
    )
}

export default Route;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        borderBottomWidth: 1,
    },
    link: {
        flex: 1,
        alignItems: "center",
    },
    linkContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        columnGap: 8,
        backgroundColor: "transparent",
    },
    startContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        backgroundColor: "transparent",
    },
    name: {
        fontSize: 16,
        textTransform: "capitalize",
    },
})