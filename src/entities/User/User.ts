export enum UserRoleEnum {
    User = "User",
    Editor = "Editor",
    Moderator = "Moderator",
    Admin = "Admin",
}

export interface User {
    id: number
    login: string
    role: UserRoleEnum
}
