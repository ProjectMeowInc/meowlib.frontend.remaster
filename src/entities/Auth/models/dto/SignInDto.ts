export interface ISignInDto {
    login: string
    password: string
}

export function mapRequestSignInToDto(response: any): ISignInDto {
    return {
        login: response.login,
        password: response.password,
    }
}
