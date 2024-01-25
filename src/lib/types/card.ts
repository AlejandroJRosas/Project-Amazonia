import type { Category } from './game-settings'

export interface Card {
	id: number
	name: string
	description: string
	category: Category
	imgSrc: string
  isActive: boolean
}
