// resto 정보 타입

interface reviewType {
  id: number
  imageUrl: string[]
  content: string
  rating: number
  regDate: string
  nickname: string
}

export interface restoResType {
  id: number
  restoAge: number
  thumbnail: string
  address: string
  name: string
  sectors: string // 업종
  locationX: number
  locationY: number
  phoneNumber: string
  menu1: string
  menu2: string
  grade: string
  review: {}[]
  rating: number
  liked: boolean
  likedCnt: number
  visited: boolean
  visitedCnt: number
  recomList: {}[]
}
