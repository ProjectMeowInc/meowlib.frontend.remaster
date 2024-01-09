export enum UserRoleEnum {
    User = "User",
    Editor = "Editor",
    Moderator = "Moderator",
    Admin = "Admin",
}

export interface UserEntity {
    id: number
    login: string
    role: UserRoleEnum
}
