export interface IUpdateAuthDto {
    refreshToken: string
}

export function mapResponseUpdateAuthToDto(response: any): IUpdateAuthDto {
    return {
        refreshToken: response.refreshToken,
    }
}
