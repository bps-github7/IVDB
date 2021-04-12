/* an interface for game descriptors - categories, creators, console makers... 
 */
export interface GameDescriptor{
    uid: string,
    type: string,
    title: string,
    description: string
}