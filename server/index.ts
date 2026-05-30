import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/logger';
import chatRoutes from './routes/chat';
import healthRoutes from './routes/health';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(requestLogger);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

app.use('/api/health', healthRoutes);
app.use('/api/chat', chatRoutes);

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('message', (data) => {
    console.log('Received message:', data);
    socket.broadcast.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

app.use(errorHandler);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Not found',
  });
});

server.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📡 WebSocket server ready`);
});

export default server;