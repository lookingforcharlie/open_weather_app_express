import { RequestHandler, Router } from 'express'
import { historyController } from '../controllers/historyController'

const router = Router()

// 📥 POST /api/search-history - Add new search
router.post('/', historyController.addSearchHistory as RequestHandler)

// 📤 GET /api/search-history - Get all search history
router.get('/', historyController.getAllSearchHistory as RequestHandler)

// 🗑️ DELETE /api/search-history/:id - Delete specific search
router.delete('/:id', historyController.deleteSearchHistory as RequestHandler)

export default router
