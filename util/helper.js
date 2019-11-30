import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const KEY = 'BimfBBWR9BZw9eg3TW0V8c+OO1587hwpVvSMYiq97fo='

function createNotification() {
    return {
        title: "It's Quiz Time!",
        body: "Don't Forget to Reviw Cards !",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
export function clearLocalNotification() {
    return AsyncStorage.removeItem(KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}
export function getDailyReminderValue() {
    return {
        today: "It's Quiz Time!"
    }
}