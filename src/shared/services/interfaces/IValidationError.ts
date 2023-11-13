export interface IValidationError {
    errorMessage: string
    validationError: {
        propertyName: string
        message: string
    }[]
}