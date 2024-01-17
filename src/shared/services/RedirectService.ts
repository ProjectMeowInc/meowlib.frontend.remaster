export class RedirectService {

    static redirect(path: string): void {
        window.location.href = `http://localhost:3000${path}`
    }

}