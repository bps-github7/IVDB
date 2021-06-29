export interface CarouselContext {
    $implicit: string,
    controller: {
        next: () => void,
        prev: () => void
    }
}