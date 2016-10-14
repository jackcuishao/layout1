/**
 * Created by cuishaojie on 16/10/14.
 */
// 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
import Toast from 'react-native-root-toast'; // 引入类库
export function toast(message){
    return (
        Toast.show(message, {
        duration: Toast.durations.LONG, // toast显示时长
        position: Toast.positions.CENTER, // toast位置
        shadow: true, // toast是否出现阴影
        animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
        hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
        delay: 0 // toast显示的延时
        })
    )
}
