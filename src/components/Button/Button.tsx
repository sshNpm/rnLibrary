/*
 * @Author: si shaohua
 * @Date: 2022-12-01 15:55:45
 * @LastEditors: si shaohua
 * @LastEditTime: 2022-12-01 15:57:25
 * @Description: file content
 */
import React from "react";
import { TouchableOpacity, Text } from 'react-native';

type TProps = {
    title?: string;
}

export default (props: TProps) => {
    const { title } = props;
    return <TouchableOpacity>
        <Text>{title}</Text>
    </TouchableOpacity>
}