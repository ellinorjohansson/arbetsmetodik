const isDevelopment: boolean = import.meta.env.VITE_MODE === 'development';

type Loggable = string | number | boolean | object;

export function customLog(...messages: Loggable[]): void {
    if (isDevelopment) {
        console.log(...messages);
    }
}

export function customError(...messages: Loggable[]): void {
    if (isDevelopment) {
        console.error(...messages);
    }
}
