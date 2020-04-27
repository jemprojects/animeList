
export class Anime {
    key: string
    title: string
    link:string
    description: string
    estado:string
    estadoDelAnime:string
    ultimoCapitulo:string
    image: string
    calificacion: number
    user:string
    created_at: Date
    constructor(result){
      this.key=result.key
      this.title=result.title
      this.estado=result.estado
      this.estadoDelAnime=result.estadoDelAnime
      this.link=result.link
      this.description=result.description
      this.calificacion=result.calificacion
      this.ultimoCapitulo=result.ultimoCapitulo
      this.image=result.image
      this.user=result.user
      this.created_at=result.created_at
    }
};

export class Manga {
  key: string
  title: string
  link:string
  description: string
  estado:string
  genero:string
  ultimoCapitulo:string
  estadoDelManga: string
  image: string
  user:string
  calificacion: number
  created_at: Date
  constructor(result){
    this.key=result.key
    this.title=result.title
    this.estado=result.estado
    this.genero=result.genero
    this.user=result.user
    this.link=result.link
    this.estadoDelManga=result.estadoDelManga
    this.description=result.description
    this.calificacion=result.calificacion
    this.ultimoCapitulo=result.ultimoCapitulo
    this.image=result.image
    this.created_at=result.created_at
  }
};
export class Drama {
  key: string
  title: string
  link:string
  description: string
  estado:string
  genero:string
  ultimoCapitulo:string
  estadoDelDrama: string
  image: string
  user:string
  calificacion: number
  created_at: Date
  constructor(result){
    this.key=result.key
    this.title=result.title
    this.estado=result.estado
    this.genero=result.genero
    this.user=result.user
    this.link=result.link
    this.estadoDelDrama=result.estadoDelDrama
    this.description=result.description
    this.calificacion=result.calificacion
    this.ultimoCapitulo=result.ultimoCapitulo
    this.image=result.image
    this.created_at=result.created_at
  }
};
