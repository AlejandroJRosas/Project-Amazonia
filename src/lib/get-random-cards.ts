import type { Card } from './types/card'
import type { Category, Difficulty } from './types/game-settings'
import { DIFFICULTIES_PAIRS_QUANTITIES } from './constants'
import { PLANTS, LOCATIONS, WILDLIFE } from './cards'

export function getRandomCards(categories: Set<Category>, difficulty: Difficulty): Card[] {
	const pairsQuantity = DIFFICULTIES_PAIRS_QUANTITIES[difficulty]

	let originCards: Card[] = []

	if (categories.has('wildlife')) {
		originCards = [...originCards, ...WILDLIFE]
	}

	if (categories.has('plants')) {
		originCards = [...originCards, ...PLANTS]
	}

	if (categories.has('locations')) {
		originCards = [...originCards, ...LOCATIONS]
	}

	const selectedCards: Card[] = []

	while (selectedCards.length < pairsQuantity) {
		const randomCard = originCards[Math.floor(Math.random() * originCards.length)]

		selectedCards.push(randomCard)
		originCards = originCards.filter((card) => card.id !== randomCard.id)
	}

	return selectedCards
}
