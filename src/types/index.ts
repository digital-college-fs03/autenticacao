export interface AppContextType {
    user: any
    signIn: (username: string, password: string) => Promise<unknown>
}