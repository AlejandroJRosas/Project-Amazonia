import type { Category } from './game-settings'

export interface Card {
	id: number
	name: string
	description: string
	category: Category
	imgSrc: string
  // Propiedades del ESTADO del objeto dentro del juego.
  isActive: boolean
  isLoaded?: boolean
  playerPointColor?: string
  playerPointRound?: number
}
