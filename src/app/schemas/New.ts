export interface Link{
  linkName: string,
  url: string
}
export interface Article{
  title: string,
  text: string[],
  links: Link[],
  img: string
}
export interface New {
  id: string,
  newName: string
  articles: Article[]
}
