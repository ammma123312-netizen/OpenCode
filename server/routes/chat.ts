import { Router, Request, Response } from 'express';
import { asyncHandler, CustomError } from '../middleware/errorHandler';
import aiService from '../config/ai';

const router = Router();

interface ChatRequest {
  message: string;
  conversationId?: string;
}

router.post(
  '/send',
  asyncHandler(async (req: Request, res: Response) => {
    const { message } = req.body as ChatRequest;

    if (!message || typeof message !== 'string') {
      const error: CustomError = new Error('Message is required and must be a string');
      error.status = 400;
      throw error;
    }

    if (message.trim().length === 0) {
      const error: CustomError = new Error('Message cannot be empty');
      error.status = 400;
      throw error;
    }

    try {
      const response = await aiService.generateResponse(message);
      res.status(200).json({
        success: true,
        data: {
          userMessage: message,
          aiResponse: response,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      const customError: CustomError = new Error('Failed to process message');
      customError.status = 500;
      throw customError;
    }
  })
);

router.get(
  '/history/:conversationId',
  asyncHandler(async (req: Request, res: Response) => {
    const { conversationId } = req.params;

    res.status(200).json({
      success: true,
      data: {
        conversationId,
        messages: [],
      },
    });
  })
);

router.get(
  '/status',
  asyncHandler(async (req: Request, res: Response) => {
    const isConnected = await aiService.validateConnection();
    res.status(200).json({
      success: true,
      data: {
        aiServiceConnected: isConnected,
        timestamp: new Date().toISOString(),
      },
    });
  })
);

export default router;