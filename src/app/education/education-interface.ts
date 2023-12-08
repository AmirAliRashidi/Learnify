export interface education {
  id: number,
  title: string,
  instructor: {
    name: string,
    email: string,
  },
  description: string,
  duration: string,
  level: string,
  num_students: number,
  price: number,
  rating: number,
  tags: educationTag[]
}

export interface educationTag {
  name: string,
  description: string,
}