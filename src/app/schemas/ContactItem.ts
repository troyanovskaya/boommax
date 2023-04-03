


export interface ContactItem {
  id: string,
  title: string,
  content:ContactItemBlock[]
}

export interface ContactItemBlock{
  name: string,
  text: string[]
}
