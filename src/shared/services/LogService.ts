import {LOG_LEVEL} from "@/app/consts";

export class LogService {

    static info(message: string, service: string) {
        console.log(`Сообщение действия: ${message}. Место действия ${service}`)
    }

    static warning(message: string, service: string) {
        if (LOG_LEVEL !== "info") {
            console.log(`Сообщение предупреждения: ${message}. Место предупреждения ${service}`)
        }
    }

    static error(message: string, service: string) {
        if (LOG_LEVEL === "error") {
            console.log(`Сообщение ошибки: ${message}. Место ошибки ${service}`)
        }
    }
}