export interface ILogInDto {
    login: string
    password: string
    isLongSession: string
}

export function mapResponseLogInToDTO(response: any): ILogInDto {
    return {
        login: response.login,
        password: response.password,
        isLongSession: response.isLongSession,
    }
}
